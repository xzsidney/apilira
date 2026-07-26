"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionDiscipline = exports.updateDefinitionDiscipline = exports.getDefinitionDisciplineById = exports.getAllDefinitionDisciplines = exports.createDefinitionDiscipline = void 0;
const models_1 = require("../models");
const createDefinitionDiscipline = async (req, res) => {
    try {
        const { name, description, gameStyle, powers } = req.body;
        const discipline = await models_1.DefinitionDiscipline.create({ name, description, gameStyle });
        if (powers && Array.isArray(powers)) {
            for (const p of powers) {
                await models_1.DefinitionDisciplinePower.create({
                    definitionDisciplineId: discipline.id,
                    name: p.name,
                    level: p.level,
                    description: p.description,
                    costType: p.costType,
                    costAmount: p.costAmount,
                    duration: p.duration,
                    dicePool: p.dicePool,
                    systemNotes: p.systemNotes,
                    gameStyle: gameStyle || 'VAMPIRE'
                });
            }
        }
        // Retorna com os poderes recém-criados
        const createdDiscipline = await models_1.DefinitionDiscipline.findByPk(discipline.id, {
            include: [models_1.DefinitionDisciplinePower]
        });
        res.status(201).json(createdDiscipline);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a Disciplina' });
    }
};
exports.createDefinitionDiscipline = createDefinitionDiscipline;
const getAllDefinitionDisciplines = async (req, res) => {
    try {
        const disciplines = await models_1.DefinitionDiscipline.findAll({
            include: [models_1.DefinitionDisciplinePower],
            order: [
                ['name', 'ASC'],
                [models_1.DefinitionDisciplinePower, 'level', 'ASC']
            ]
        });
        res.json(disciplines);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as Disciplinas' });
    }
};
exports.getAllDefinitionDisciplines = getAllDefinitionDisciplines;
const getDefinitionDisciplineById = async (req, res) => {
    try {
        const { id } = req.params;
        const discipline = await models_1.DefinitionDiscipline.findByPk(id, {
            include: [models_1.DefinitionDisciplinePower],
            order: [
                [models_1.DefinitionDisciplinePower, 'level', 'ASC']
            ]
        });
        if (!discipline) {
            return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        res.json(discipline);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar a Disciplina' });
    }
};
exports.getDefinitionDisciplineById = getDefinitionDisciplineById;
const updateDefinitionDiscipline = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const discipline = await models_1.DefinitionDiscipline.findByPk(id);
        if (!discipline) {
            return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        await discipline.update({ name, description });
        res.json(discipline);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a Disciplina' });
    }
};
exports.updateDefinitionDiscipline = updateDefinitionDiscipline;
const deleteDefinitionDiscipline = async (req, res) => {
    try {
        const { id } = req.params;
        const discipline = await models_1.DefinitionDiscipline.findByPk(id);
        if (!discipline) {
            return res.status(404).json({ error: 'Disciplina não encontrada' });
        }
        await discipline.destroy(); // Isso deve apagar em cascata os poderes também, se configurado onDelete: CASCADE no BD
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a Disciplina' });
    }
};
exports.deleteDefinitionDiscipline = deleteDefinitionDiscipline;
