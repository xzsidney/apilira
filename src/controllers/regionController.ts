import { Request, Response } from "express";
import prisma from "../config/db";
import { regionSchema } from "../schemas/regionSchemas";
import { z } from "zod";

export const getRegions = async (req: Request, res: Response): Promise<void> => {
  try {
    const regions = await prisma.region.findMany({
      include: {
        childRegions: true,
        criminalities: { include: { criminality: true } },
        mediaVisibilities: { include: { mediaVisibility: true } },
        publicSecurities: { include: { publicSecurity: true } },
        wealths: { include: { wealth: true } },
        demographics: { include: { demographicProfile: true } },
      },
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
    
    const newRegion = await prisma.region.create({ 
      data: {
        ...regionData,
        criminalities: criminalities ? { create: criminalities } : undefined,
        mediaVisibilities: mediaVisibilities ? { create: mediaVisibilities } : undefined,
        publicSecurities: publicSecurities ? { create: publicSecurities } : undefined,
        wealths: wealths ? { create: wealths } : undefined,
        demographics: demographics ? { create: demographics } : undefined,
      } 
    });
    res.status(201).json(newRegion);
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

    const updatedRegion = await prisma.region.update({
      where: { id },
      data: {
        ...regionData,
        ...(criminalities && { criminalities: { deleteMany: {}, create: criminalities } }),
        ...(mediaVisibilities && { mediaVisibilities: { deleteMany: {}, create: mediaVisibilities } }),
        ...(publicSecurities && { publicSecurities: { deleteMany: {}, create: publicSecurities } }),
        ...(wealths && { wealths: { deleteMany: {}, create: wealths } }),
        ...(demographics && { demographics: { deleteMany: {}, create: demographics } }),
      },
    });
    res.json(updatedRegion);
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
    await prisma.region.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar região." });
  }
};
