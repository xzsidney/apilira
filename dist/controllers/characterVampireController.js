"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacterVampire = exports.updateCharacterVampire = exports.getAllCharacterVampiresByUser = exports.getCharacterVampireById = exports.createCharacterVampire = void 0;
const models_1 = require("../models");
const CharacterVampire_1 = require("../models/CharacterVampire");
const CharacterVampireAttribute_1 = require("../models/CharacterVampireAttribute");
const CharacterVampireSkill_1 = require("../models/CharacterVampireSkill");
const CharacterVampireDiscipline_1 = require("../models/CharacterVampireDiscipline");
const CharacterVampirePower_1 = require("../models/CharacterVampirePower");
const CharacterVampireMeritFlaw_1 = require("../models/CharacterVampireMeritFlaw");
const CharacterVampireBackground_1 = require("../models/CharacterVampireBackground");
const CharacterVampireEquipment_1 = require("../models/CharacterVampireEquipment");
const models_2 = require("../models");
const createCharacterVampire = async (req, res) => {
    const transaction = await models_1.sequelize.transaction();
    try {
        const authReq = req;
        const userId = authReq.userId || req.body.userId;
        const { attributes, skills, disciplines, powers, meritsFlaws, backgrounds, equipments, ...characterData } = req.body;
        characterData.userId = userId;
        // Cria o personagem principal
        const character = await CharacterVampire_1.CharacterVampire.create(characterData, { transaction });
        // Insere as coleções nas tabelas associativas se existirem
        if (attributes && attributes.length > 0) {
            const mapped = attributes.map((a) => ({ ...a, characterVampireId: character.id }));
            await CharacterVampireAttribute_1.CharacterVampireAttribute.bulkCreate(mapped, { transaction });
        }
        if (skills && skills.length > 0) {
            const mapped = skills.map((s) => ({ ...s, characterVampireId: character.id }));
            await CharacterVampireSkill_1.CharacterVampireSkill.bulkCreate(mapped, { transaction });
        }
        if (disciplines && disciplines.length > 0) {
            const mapped = disciplines.map((d) => ({ ...d, characterVampireId: character.id }));
            await CharacterVampireDiscipline_1.CharacterVampireDiscipline.bulkCreate(mapped, { transaction });
        }
        if (powers && powers.length > 0) {
            const mapped = powers.map((p) => ({ ...p, characterVampireId: character.id }));
            await CharacterVampirePower_1.CharacterVampirePower.bulkCreate(mapped, { transaction });
        }
        if (meritsFlaws && meritsFlaws.length > 0) {
            const mapped = meritsFlaws.map((m) => ({ ...m, characterVampireId: character.id }));
            await CharacterVampireMeritFlaw_1.CharacterVampireMeritFlaw.bulkCreate(mapped, { transaction });
        }
        if (backgrounds && backgrounds.length > 0) {
            const mapped = backgrounds.map((b) => ({ ...b, characterVampireId: character.id }));
            await CharacterVampireBackground_1.CharacterVampireBackground.bulkCreate(mapped, { transaction });
        }
        if (equipments && equipments.length > 0) {
            const mapped = equipments.map((e) => ({ ...e, characterVampireId: character.id }));
            await CharacterVampireEquipment_1.CharacterVampireEquipment.bulkCreate(mapped, { transaction });
        }
        await transaction.commit();
        res.status(201).json(character);
    }
    catch (error) {
        await transaction.rollback();
        console.error('Erro ao criar Ficha do Vampiro:', error);
        res.status(500).json({ error: 'Erro interno ao salvar a ficha' });
    }
};
exports.createCharacterVampire = createCharacterVampire;
const getCharacterVampireById = async (req, res) => {
    try {
        const { id } = req.params;
        // Busca o personagem com TODAS as associações para montar a ficha completa!
        const character = await CharacterVampire_1.CharacterVampire.findByPk(id, {
            include: [
                { model: models_2.DefinitionClan, attributes: ['name'] },
                { model: models_2.DefinitionPredator, attributes: ['name'] },
                { model: models_2.DefinitionResonance, attributes: ['name'] },
                { model: models_2.DefinitionBloodPotency, attributes: ['level', 'bloodSurge', 'mendAmount'] },
                {
                    model: CharacterVampireAttribute_1.CharacterVampireAttribute,
                    include: [{ model: models_2.DefinitionAttribute, attributes: ['name', 'category'] }]
                },
                {
                    model: CharacterVampireSkill_1.CharacterVampireSkill,
                    include: [{ model: models_2.DefinitionSkill, attributes: ['name', 'category'] }]
                },
                {
                    model: CharacterVampireDiscipline_1.CharacterVampireDiscipline,
                    include: [{ model: models_2.DefinitionDiscipline, attributes: ['name'] }]
                },
                {
                    model: CharacterVampirePower_1.CharacterVampirePower,
                    include: [{ model: models_2.DefinitionDisciplinePower, attributes: ['name', 'level'] }]
                },
            ]
        });
        if (!character) {
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        res.json(character);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar personagem' });
    }
};
exports.getCharacterVampireById = getCharacterVampireById;
const getAllCharacterVampiresByUser = async (req, res) => {
    try {
        const authReq = req;
        const userId = authReq.userId || req.user?.id; // Pegando do authMiddleware
        if (!userId) {
            return res.status(401).json({ error: 'Não autorizado' });
        }
        const characters = await CharacterVampire_1.CharacterVampire.findAll({
            where: { userId },
            include: [
                { model: models_2.DefinitionClan, attributes: ['name'] },
                { model: models_2.DefinitionPredator, attributes: ['name'] }
            ]
        });
        res.json(characters);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar personagens do usuário' });
    }
};
exports.getAllCharacterVampiresByUser = getAllCharacterVampiresByUser;
const updateCharacterVampire = async (req, res) => {
    const transaction = await models_1.sequelize.transaction();
    try {
        const { id } = req.params;
        const character = await CharacterVampire_1.CharacterVampire.findByPk(id);
        if (!character) {
            await transaction.rollback();
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        const { attributes, skills, disciplines, powers, meritsFlaws, backgrounds, equipments, ...updateData } = req.body;
        // Atualiza os dados bases
        await character.update(updateData, { transaction });
        // Para as coleções associativas, o padrão em PUT completo é recriar:
        if (attributes) {
            await CharacterVampireAttribute_1.CharacterVampireAttribute.destroy({ where: { characterVampireId: id }, transaction });
            const mapped = attributes.map((a) => ({ ...a, characterVampireId: id }));
            await CharacterVampireAttribute_1.CharacterVampireAttribute.bulkCreate(mapped, { transaction });
        }
        if (skills) {
            await CharacterVampireSkill_1.CharacterVampireSkill.destroy({ where: { characterVampireId: id }, transaction });
            const mapped = skills.map((s) => ({ ...s, characterVampireId: id }));
            await CharacterVampireSkill_1.CharacterVampireSkill.bulkCreate(mapped, { transaction });
        }
        // Repetir para os outros arrays conforme necessidade de update completo da ficha.
        // Para simplificar a POC, não faremos o replace completo de disciplinas aqui, 
        // assumindo que os arrays mandados são para substituição total.
        await transaction.commit();
        res.json({ message: 'Personagem atualizado com sucesso', character });
    }
    catch (error) {
        await transaction.rollback();
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar personagem' });
    }
};
exports.updateCharacterVampire = updateCharacterVampire;
const deleteCharacterVampire = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await CharacterVampire_1.CharacterVampire.findByPk(id);
        if (!character) {
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        // A deleção em cascata (ON DELETE CASCADE) do banco cuidará das tabelas filhas!
        await character.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir personagem' });
    }
};
exports.deleteCharacterVampire = deleteCharacterVampire;
