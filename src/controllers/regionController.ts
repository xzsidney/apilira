import { Request, Response } from "express";
import { regionSchema } from "../schemas/regionSchemas";
import { z } from "zod";
import { Region, Criminality, MediaVisibility, PublicSecurity, Wealth, DemographicProfile, sequelize } from "../models";

export const getRegions = async (req: Request, res: Response): Promise<void> => {
  try {
    const regions = await Region.findAll({
      include: { all: true, nested: true }
    });
    res.json(regions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar regiões." });
  }
};

export const createRegion = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = regionSchema.parse(req.body);
    const { criminalities, mediaVisibilities, publicSecurities, wealths, demographics, ...regionData } = data;
    
    const t = await sequelize.transaction();
    try {
      const newRegion = await Region.create(regionData as any, { transaction: t });
      
      if (criminalities) {
        await Criminality.bulkCreate(criminalities.map(c => ({ ...c, regionId: newRegion.id })) as any, { transaction: t });
      }
      if (mediaVisibilities) {
        await MediaVisibility.bulkCreate(mediaVisibilities.map(m => ({ ...m, regionId: newRegion.id })) as any, { transaction: t });
      }
      if (publicSecurities) {
        await PublicSecurity.bulkCreate(publicSecurities.map(p => ({ ...p, regionId: newRegion.id })) as any, { transaction: t });
      }
      if (wealths) {
        await Wealth.bulkCreate(wealths.map(w => ({ ...w, regionId: newRegion.id })) as any, { transaction: t });
      }
      if (demographics) {
        await DemographicProfile.bulkCreate(demographics.map(d => ({ ...d, regionId: newRegion.id })) as any, { transaction: t });
      }

      await t.commit();
      
      const createdRegion = await Region.findByPk(newRegion.id, { include: { all: true, nested: true } });
      res.status(201).json(createdRegion);
    } catch (e) {
      await t.rollback();
      throw e;
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar região." });
    }
  }
};

export const updateRegion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = regionSchema.partial().parse(req.body);
    const { criminalities, mediaVisibilities, publicSecurities, wealths, demographics, ...regionData } = data;

    const t = await sequelize.transaction();
    try {
      await Region.update(regionData as any, { where: { id }, transaction: t });

      if (criminalities) {
        await Criminality.destroy({ where: { regionId: id }, transaction: t });
        await Criminality.bulkCreate(criminalities.map(c => ({ ...c, regionId: id })) as any, { transaction: t });
      }
      if (mediaVisibilities) {
        await MediaVisibility.destroy({ where: { regionId: id }, transaction: t });
        await MediaVisibility.bulkCreate(mediaVisibilities.map(m => ({ ...m, regionId: id })) as any, { transaction: t });
      }
      if (publicSecurities) {
        await PublicSecurity.destroy({ where: { regionId: id }, transaction: t });
        await PublicSecurity.bulkCreate(publicSecurities.map(p => ({ ...p, regionId: id })) as any, { transaction: t });
      }
      if (wealths) {
        await Wealth.destroy({ where: { regionId: id }, transaction: t });
        await Wealth.bulkCreate(wealths.map(w => ({ ...w, regionId: id })) as any, { transaction: t });
      }
      if (demographics) {
        await DemographicProfile.destroy({ where: { regionId: id }, transaction: t });
        await DemographicProfile.bulkCreate(demographics.map(d => ({ ...d, regionId: id })) as any, { transaction: t });
      }

      await t.commit();
      
      const updatedRegion = await Region.findByPk(id, { include: { all: true, nested: true } });
      res.json(updatedRegion);
    } catch (e) {
      await t.rollback();
      throw e;
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar região." });
    }
  }
};

export const deleteRegion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await Region.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar região." });
  }
};
