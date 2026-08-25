"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleEquipEquipment = exports.buyEquipment = exports.awakenCharacterVampire = exports.deleteCharacterVampire = exports.updateCharacterVampire = exports.getAllCharacterVampiresByUser = exports.getCharacterVampireById = exports.createCharacterVampire = exports.getAvailableSires = void 0;
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
const CharacterVampire_1 = require("../models/CharacterVampire");
const CharacterVampireAttribute_1 = require("../models/CharacterVampireAttribute");
const CharacterVampireSkill_1 = require("../models/CharacterVampireSkill");
const CharacterVampireDiscipline_1 = require("../models/CharacterVampireDiscipline");
const CharacterVampirePower_1 = require("../models/CharacterVampirePower");
const CharacterVampireMeritFlaw_1 = require("../models/CharacterVampireMeritFlaw");
const CharacterVampireBackground_1 = require("../models/CharacterVampireBackground");
const CharacterVampireEquipment_1 = require("../models/CharacterVampireEquipment");
const models_2 = require("../models");
const getAvailableSires = async (req, res) => {
    try {
        const { clanId } = req.query;
        if (!clanId) {
            return res.status(400).json({ error: 'clanId é obrigatório' });
        }
        // Busca NPCs ou Vampiros do mesmo clã que sejam de geração mais antiga (menor que 12, que é o padrão do neófito)
        const sires = await CharacterVampire_1.CharacterVampire.findAll({
            where: {
                clanId: String(clanId),
                generation: {
                    [sequelize_1.Op.lt]: 12
                }
            },
            attributes: ['id', 'name', 'generation', 'concept']
        });
        res.json(sires);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar senhores disponíveis' });
    }
};
exports.getAvailableSires = getAvailableSires;
const createCharacterVampire = async (req, res) => {
    const transaction = await models_1.sequelize.transaction();
    try {
        const authReq = req;
        const userId = authReq.userId || req.body.userId;
        const { attributes, skills, disciplines, powers, meritsFlaws, backgrounds, equipments, ...characterData } = req.body;
        characterData.userId = userId;
        // Segurança (Regras Fixas Imutáveis na Criação de Neófitos)
        characterData.generation = 12;
        // Busca a Potência de Sangue nível 1 para garantir o ID correto
        const bp1 = await models_2.DefinitionBloodPotency.findOne({ where: { level: 1 } });
        if (bp1) {
            characterData.bloodPotencyId = bp1.id;
        }
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
        let finalDisciplines = disciplines || [];
        if (finalDisciplines.length === 0) {
            const clan = await models_2.DefinitionClan.findByPk(characterData.clanId);
            if (clan && clan.disciplines) {
                const discNames = clan.disciplines.split(',').map((s) => s.trim());
                const dbDiscs = await models_2.DefinitionDiscipline.findAll({ where: { name: { [sequelize_1.Op.in]: discNames } } });
                if (dbDiscs.length > 0)
                    finalDisciplines.push({ definitionDisciplineId: dbDiscs[0].id, value: 2 });
                if (dbDiscs.length > 1)
                    finalDisciplines.push({ definitionDisciplineId: dbDiscs[1].id, value: 1 });
            }
        }
        if (finalDisciplines.length > 0) {
            const mapped = finalDisciplines.map((d) => ({ ...d, characterVampireId: character.id }));
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
                { model: models_2.DefinitionClan, attributes: ['name', 'weakness'] },
                { model: models_2.DefinitionPredator, attributes: ['name'] },
                { model: models_2.DefinitionResonance, attributes: ['name'] },
                { model: models_2.DefinitionBloodPotency, attributes: ['level', 'bloodSurge', 'mendAmount', 'disciplineBonus', 'baneSeverity', 'feedingPenalty'] },
                {
                    model: CharacterVampireAttribute_1.CharacterVampireAttribute,
                    separate: true,
                    include: [{ model: models_2.DefinitionAttribute, attributes: ['name', 'type'] }]
                },
                {
                    model: CharacterVampireSkill_1.CharacterVampireSkill,
                    separate: true,
                    include: [{ model: models_2.DefinitionSkill, attributes: ['name', 'type'] }]
                },
                {
                    model: CharacterVampireDiscipline_1.CharacterVampireDiscipline,
                    separate: true,
                    include: [{ model: models_2.DefinitionDiscipline, attributes: ['name'] }]
                },
                {
                    model: CharacterVampirePower_1.CharacterVampirePower,
                    separate: true,
                    include: [{ model: models_2.DefinitionDisciplinePower, attributes: ['name', 'level'] }]
                },
                {
                    model: CharacterVampireBackground_1.CharacterVampireBackground,
                    separate: true,
                    include: [{ model: models_2.DefinitionBackground, attributes: ['name', 'description'] }]
                },
                {
                    model: CharacterVampireMeritFlaw_1.CharacterVampireMeritFlaw,
                    separate: true,
                    include: [{ model: models_2.DefinitionMeritFlaw, attributes: ['name', 'description', 'type'] }]
                },
                {
                    model: models_2.CharacterHaven,
                    as: 'Haven',
                    include: [{ model: models_2.DefinitionLocation, attributes: ['id', 'name', 'level'] }]
                }
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
            const mapped = attributes.map((a) => ({
                characterVampireId: id,
                definitionAttributeId: a.definitionAttributeId,
                value: a.value
            }));
            await CharacterVampireAttribute_1.CharacterVampireAttribute.bulkCreate(mapped, { transaction });
        }
        if (skills) {
            await CharacterVampireSkill_1.CharacterVampireSkill.destroy({ where: { characterVampireId: id }, transaction });
            const mapped = skills.map((s) => ({
                characterVampireId: id,
                definitionSkillId: s.definitionSkillId,
                value: s.value,
                specialty: s.specialty
            }));
            await CharacterVampireSkill_1.CharacterVampireSkill.bulkCreate(mapped, { transaction });
        }
        if (disciplines) {
            await CharacterVampireDiscipline_1.CharacterVampireDiscipline.destroy({ where: { characterVampireId: id }, transaction });
            const mapped = disciplines.map((d) => ({
                characterVampireId: id,
                definitionDisciplineId: d.definitionDisciplineId,
                value: d.value
            }));
            await CharacterVampireDiscipline_1.CharacterVampireDiscipline.bulkCreate(mapped, { transaction });
        }
        if (backgrounds) {
            await CharacterVampireBackground_1.CharacterVampireBackground.destroy({ where: { characterVampireId: id }, transaction });
            const mapped = backgrounds.map((b) => ({
                characterVampireId: id,
                definitionBackgroundId: b.definitionBackgroundId,
                value: b.value,
                details: b.details
            }));
            await CharacterVampireBackground_1.CharacterVampireBackground.bulkCreate(mapped, { transaction });
        }
        if (meritsFlaws) {
            await CharacterVampireMeritFlaw_1.CharacterVampireMeritFlaw.destroy({ where: { characterVampireId: id }, transaction });
            const mapped = meritsFlaws.map((m) => ({
                characterVampireId: id,
                definitionMeritFlawId: m.definitionMeritFlawId,
                details: m.details
            }));
            await CharacterVampireMeritFlaw_1.CharacterVampireMeritFlaw.bulkCreate(mapped, { transaction });
        }
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
const awakenCharacterVampire = async (req, res) => {
    try {
        const { id } = req.params;
        const character = await CharacterVampire_1.CharacterVampire.findByPk(id);
        if (!character) {
            return res.status(404).json({ message: 'Personagem nao encontrado' });
        }
        if (character.isAwake) {
            return res.status(400).json({ message: 'Personagem ja esta acordado' });
        }
        // Rouse Check (1d10)
        const roll = Math.floor(Math.random() * 10) + 1;
        let newHunger = character.hunger;
        let message = 'Voce acordou. A Fome esta sob controle.';
        if (roll <= 5) {
            newHunger = Math.min(5, character.hunger + 1);
            message = 'Sua besta se agita. Voce acordou com mais fome.';
        }
        await character.update({
            isAwake: true,
            hunger: newHunger
        });
        res.json({ message, character });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao despertar personagem' });
    }
};
exports.awakenCharacterVampire = awakenCharacterVampire;
// --- EQUIPMENT MANAGEMENT ---
const buyEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const { definitionEquipmentId } = req.body;
        const character = await CharacterVampire_1.CharacterVampire.findByPk(id);
        if (!character)
            return res.status(404).json({ error: 'Personagem não encontrado.' });
        // Verifica se já tem o equipamento
        const existing = await CharacterVampireEquipment_1.CharacterVampireEquipment.findOne({
            where: { characterVampireId: id, definitionEquipmentId }
        });
        if (existing) {
            existing.quantity += 1;
            await existing.save();
            return res.json(existing);
        }
        else {
            const newItem = await CharacterVampireEquipment_1.CharacterVampireEquipment.create({
                characterVampireId: id,
                definitionEquipmentId,
                quantity: 1,
                equipped: false
            });
            return res.status(201).json(newItem);
        }
    }
    catch (error) {
        console.error('Erro ao comprar equipamento:', error);
        res.status(500).json({ error: 'Erro ao processar a compra de equipamento.' });
    }
};
exports.buyEquipment = buyEquipment;
const toggleEquipEquipment = async (req, res) => {
    try {
        const { id, equipmentId } = req.params;
        const existing = await CharacterVampireEquipment_1.CharacterVampireEquipment.findOne({
            where: { characterVampireId: id, definitionEquipmentId: equipmentId }
        });
        if (!existing)
            return res.status(404).json({ error: 'Equipamento não encontrado no inventário.' });
        existing.equipped = !existing.equipped;
        await existing.save();
        return res.json(existing);
    }
    catch (error) {
        console.error('Erro ao equipar/desequipar item:', error);
        res.status(500).json({ error: 'Erro ao equipar/desequipar item.' });
    }
};
exports.toggleEquipEquipment = toggleEquipEquipment;
