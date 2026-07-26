"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionSkill = exports.updateDefinitionSkill = exports.getDefinitionSkillById = exports.getAllDefinitionSkills = exports.createDefinitionSkill = void 0;
const models_1 = require("../models");
const createDefinitionSkill = async (req, res) => {
    try {
        const { name, description, type, gameStyle } = req.body;
        const skill = await models_1.DefinitionSkill.create({ name, description, type, gameStyle });
        res.status(201).json(skill);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a habilidade base' });
    }
};
exports.createDefinitionSkill = createDefinitionSkill;
const getAllDefinitionSkills = async (req, res) => {
    try {
        const skills = await models_1.DefinitionSkill.findAll();
        res.json(skills);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as habilidades base' });
    }
};
exports.getAllDefinitionSkills = getAllDefinitionSkills;
const getDefinitionSkillById = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await models_1.DefinitionSkill.findByPk(id);
        if (!skill) {
            return res.status(404).json({ error: 'Habilidade não encontrada' });
        }
        res.json(skill);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar a habilidade base' });
    }
};
exports.getDefinitionSkillById = getDefinitionSkillById;
const updateDefinitionSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, type, gameStyle } = req.body;
        const skill = await models_1.DefinitionSkill.findByPk(id);
        if (!skill) {
            return res.status(404).json({ error: 'Habilidade não encontrada' });
        }
        await skill.update({ name, description, type, gameStyle });
        res.json(skill);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a habilidade base' });
    }
};
exports.updateDefinitionSkill = updateDefinitionSkill;
const deleteDefinitionSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await models_1.DefinitionSkill.findByPk(id);
        if (!skill) {
            return res.status(404).json({ error: 'Habilidade não encontrada' });
        }
        await skill.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a habilidade base' });
    }
};
exports.deleteDefinitionSkill = deleteDefinitionSkill;
