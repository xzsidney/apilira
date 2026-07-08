"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegion = exports.updateRegion = exports.createRegion = exports.getRegions = void 0;
const regionSchemas_1 = require("../schemas/regionSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getRegions = async (req, res) => {
    try {
        const regions = await models_1.Region.findAll({
            include: { all: true, nested: true }
        });
        res.json(regions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar regiões." });
    }
};
exports.getRegions = getRegions;
const createRegion = async (req, res) => {
    try {
        const data = regionSchemas_1.regionSchema.parse(req.body);
        const { criminalities, mediaVisibilities, publicSecurities, wealths, demographics, ...regionData } = data;
        const t = await models_1.sequelize.transaction();
        try {
            const newRegion = await models_1.Region.create(regionData, { transaction: t });
            if (criminalities) {
                await models_1.Criminality.bulkCreate(criminalities.map(c => ({ ...c, regionId: newRegion.id })), { transaction: t });
            }
            if (mediaVisibilities) {
                await models_1.MediaVisibility.bulkCreate(mediaVisibilities.map(m => ({ ...m, regionId: newRegion.id })), { transaction: t });
            }
            if (publicSecurities) {
                await models_1.PublicSecurity.bulkCreate(publicSecurities.map(p => ({ ...p, regionId: newRegion.id })), { transaction: t });
            }
            if (wealths) {
                await models_1.Wealth.bulkCreate(wealths.map(w => ({ ...w, regionId: newRegion.id })), { transaction: t });
            }
            if (demographics) {
                await models_1.DemographicProfile.bulkCreate(demographics.map(d => ({ ...d, regionId: newRegion.id })), { transaction: t });
            }
            await t.commit();
            const createdRegion = await models_1.Region.findByPk(newRegion.id, { include: { all: true, nested: true } });
            res.status(201).json(createdRegion);
        }
        catch (e) {
            await t.rollback();
            throw e;
        }
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao criar região." });
        }
    }
};
exports.createRegion = createRegion;
const updateRegion = async (req, res) => {
    try {
        const { id } = req.params;
        const data = regionSchemas_1.regionSchema.partial().parse(req.body);
        const { criminalities, mediaVisibilities, publicSecurities, wealths, demographics, ...regionData } = data;
        const t = await models_1.sequelize.transaction();
        try {
            await models_1.Region.update(regionData, { where: { id }, transaction: t });
            if (criminalities) {
                await models_1.Criminality.destroy({ where: { regionId: id }, transaction: t });
                await models_1.Criminality.bulkCreate(criminalities.map(c => ({ ...c, regionId: id })), { transaction: t });
            }
            if (mediaVisibilities) {
                await models_1.MediaVisibility.destroy({ where: { regionId: id }, transaction: t });
                await models_1.MediaVisibility.bulkCreate(mediaVisibilities.map(m => ({ ...m, regionId: id })), { transaction: t });
            }
            if (publicSecurities) {
                await models_1.PublicSecurity.destroy({ where: { regionId: id }, transaction: t });
                await models_1.PublicSecurity.bulkCreate(publicSecurities.map(p => ({ ...p, regionId: id })), { transaction: t });
            }
            if (wealths) {
                await models_1.Wealth.destroy({ where: { regionId: id }, transaction: t });
                await models_1.Wealth.bulkCreate(wealths.map(w => ({ ...w, regionId: id })), { transaction: t });
            }
            if (demographics) {
                await models_1.DemographicProfile.destroy({ where: { regionId: id }, transaction: t });
                await models_1.DemographicProfile.bulkCreate(demographics.map(d => ({ ...d, regionId: id })), { transaction: t });
            }
            await t.commit();
            const updatedRegion = await models_1.Region.findByPk(id, { include: { all: true, nested: true } });
            res.json(updatedRegion);
        }
        catch (e) {
            await t.rollback();
            throw e;
        }
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar região." });
        }
    }
};
exports.updateRegion = updateRegion;
const deleteRegion = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.Region.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar região." });
    }
};
exports.deleteRegion = deleteRegion;
