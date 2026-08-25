"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const models_1 = require("../models");
class CharacterService {
    /**
     * Aplica recompensas ou custos à ficha do personagem de forma unificada.
     */
    static async applyImpact(characterId, impact) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        let updated = false;
        // XP
        if (impact.exp && typeof impact.exp === 'number') {
            character.experienceTotal += impact.exp;
            if (character.experienceTotal < 0)
                character.experienceTotal = 0;
            updated = true;
        }
        // FOME (0 a 5)
        if (impact.hunger && typeof impact.hunger === 'number') {
            character.hunger += impact.hunger;
            if (character.hunger < 0)
                character.hunger = 0;
            if (character.hunger > 5)
                character.hunger = 5;
            updated = true;
        }
        // VITALIDADE SUPERFICIAL
        if (impact.healthDamageSuperficial && typeof impact.healthDamageSuperficial === 'number') {
            character.healthDamageSuperficial += impact.healthDamageSuperficial;
            if (character.healthDamageSuperficial < 0)
                character.healthDamageSuperficial = 0;
            if (character.healthDamageSuperficial > character.healthMax)
                character.healthDamageSuperficial = character.healthMax;
            updated = true;
        }
        // VITALIDADE AGRAVADA
        if (impact.healthDamageAggravated && typeof impact.healthDamageAggravated === 'number') {
            character.healthDamageAggravated += impact.healthDamageAggravated;
            if (character.healthDamageAggravated < 0)
                character.healthDamageAggravated = 0;
            if (character.healthDamageAggravated > character.healthMax)
                character.healthDamageAggravated = character.healthMax;
            updated = true;
        }
        // FORÇA DE VONTADE SUPERFICIAL
        if (impact.willpowerDamageSuperficial && typeof impact.willpowerDamageSuperficial === 'number') {
            character.willpowerDamageSuperficial += impact.willpowerDamageSuperficial;
            if (character.willpowerDamageSuperficial < 0)
                character.willpowerDamageSuperficial = 0;
            if (character.willpowerDamageSuperficial > character.willpowerMax)
                character.willpowerDamageSuperficial = character.willpowerMax;
            updated = true;
        }
        // FORÇA DE VONTADE AGRAVADA
        if (impact.willpowerDamageAggravated && typeof impact.willpowerDamageAggravated === 'number') {
            character.willpowerDamageAggravated += impact.willpowerDamageAggravated;
            if (character.willpowerDamageAggravated < 0)
                character.willpowerDamageAggravated = 0;
            if (character.willpowerDamageAggravated > character.willpowerMax)
                character.willpowerDamageAggravated = character.willpowerMax;
            updated = true;
        }
        // HUMANIDADE (0 a 10)
        if (impact.humanity && typeof impact.humanity === 'number') {
            character.humanity += impact.humanity;
            if (character.humanity < 0)
                character.humanity = 0;
            if (character.humanity > 10)
                character.humanity = 10;
            updated = true;
        }
        // MANCHAS (STAINS)
        if (impact.stains && typeof impact.stains === 'number') {
            character.stains += impact.stains;
            if (character.stains < 0)
                character.stains = 0;
            if (character.stains > 10)
                character.stains = 10;
            updated = true;
        }
        // DINHEIRO / RECURSOS (R$)
        if (impact.money && typeof impact.money === 'number') {
            character.money = Math.max(0, (character.money || 0) + impact.money);
            updated = true;
        }
        if (updated) {
            await character.save();
        }
        // BÔNUS DE ATRIBUTO (Se configurado)
        if (impact.attributeBonus && impact.attributeBonus.name && impact.attributeBonus.value) {
            const defAttr = await models_1.DefinitionAttribute.findOne({ where: { name: impact.attributeBonus.name } });
            if (defAttr) {
                const [charAttr] = await models_1.CharacterVampireAttribute.findOrCreate({
                    where: { characterVampireId: character.id, definitionAttributeId: defAttr.id },
                    defaults: { value: 1 }
                });
                charAttr.value = Math.min(5, charAttr.value + impact.attributeBonus.value);
                await charAttr.save();
            }
        }
        // BÔNUS DE PERÍCIA (Se configurado)
        if (impact.skillBonus && impact.skillBonus.name && impact.skillBonus.value) {
            const defSkill = await models_1.DefinitionSkill.findOne({ where: { name: impact.skillBonus.name } });
            if (defSkill) {
                const [charSkill] = await models_1.CharacterVampireSkill.findOrCreate({
                    where: { characterVampireId: character.id, definitionSkillId: defSkill.id },
                    defaults: { value: 0 }
                });
                charSkill.value = Math.min(5, charSkill.value + impact.skillBonus.value);
                await charSkill.save();
            }
        }
        // DROP DE EQUIPAMENTO / ITEM
        if (impact.equipmentDropId) {
            const defEquip = await models_1.DefinitionEquipment.findByPk(impact.equipmentDropId);
            if (defEquip) {
                const [charEquip, created] = await models_1.CharacterVampireEquipment.findOrCreate({
                    where: { characterVampireId: character.id, definitionEquipmentId: defEquip.id },
                    defaults: { quantity: 1, equipped: false }
                });
                if (!created) {
                    charEquip.quantity += 1;
                    await charEquip.save();
                }
            }
        }
        // PERDA / APREENSÃO DE EQUIPAMENTO
        if (impact.lostEquipmentId) {
            const charEquip = await models_1.CharacterVampireEquipment.findOne({
                where: { characterVampireId: character.id, definitionEquipmentId: impact.lostEquipmentId }
            });
            if (charEquip) {
                if (charEquip.quantity > 1) {
                    charEquip.quantity -= 1;
                    await charEquip.save();
                }
                else {
                    await charEquip.destroy();
                }
            }
        }
        return character;
    }
    /**
     * Registra a conclusão de uma atividade (Visual Novel ou Idle Mission)
     * e retorna verdadeiro se foi registrado com sucesso.
     */
    static async logActivity(characterId, activityType, referenceId, resultData) {
        return await models_1.CharacterActivityLog.create({
            characterId,
            activityType,
            referenceId,
            resultData
        });
    }
    /**
     * Checa quantas vezes o personagem completou essa atividade.
     */
    static async getCompletionCount(characterId, activityType, referenceId) {
        const count = await models_1.CharacterActivityLog.count({
            where: {
                characterId,
                activityType,
                referenceId
            }
        });
        return count;
    }
}
exports.CharacterService = CharacterService;
