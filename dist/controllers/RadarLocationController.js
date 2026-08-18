"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRadarLocations = void 0;
const index_1 = require("../models/index");
const getRadarLocations = async (req, res) => {
    try {
        const locations = await index_1.DefinitionLocation.findAll({
            where: { level: 2 }, // Zones
            include: [
                {
                    model: index_1.DefinitionLocation,
                    as: 'children', // Assuming parent-child relation is aliased as children
                    required: false
                }
            ]
        });
        res.json(locations);
    }
    catch (error) {
        console.error('Error fetching radar locations:', error);
        res.status(500).json({ error: 'Erro ao buscar localizações do radar.' });
    }
};
exports.getRadarLocations = getRadarLocations;
