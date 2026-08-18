"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCreationPackages = void 0;
const models_1 = require("../models");
const getAllCreationPackages = async (req, res) => {
    try {
        const packages = await models_1.CreationPackage.findAll({
            include: [
                {
                    model: models_1.CreationPackageItem,
                    as: "CreationPackageItems" // This comes from the automatic association name
                }
            ]
        });
        res.json(packages);
    }
    catch (error) {
        console.error("Error fetching creation packages:", error);
        res.status(500).json({ error: "Erro ao buscar os pacotes de criação." });
    }
};
exports.getAllCreationPackages = getAllCreationPackages;
