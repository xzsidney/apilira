"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const models_1 = require("../models");
class CharacterService {
    /**
     * Applica recompensas ou custos à ficha do personagem de forma unificada.
     */
    static async applyImpact(characterId, impact) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        let updated = false;
        if (impact.exp) {
            character.experienceTotal += impact.exp;
            updated = true;
        }
        if (impact.hunger) {
            character.hunger += impact.hunger;
            if (character.hunger < 0)
                character.hunger = 0;
            if (character.hunger > 5)
                character.hunger = 5;
            updated = true;
        }
        if (impact.willpowerSuperficial) {
            character.willpowerDamageSuperficial += impact.willpowerSuperficial;
            if (character.willpowerDamageSuperficial < 0)
                character.willpowerDamageSuperficial = 0;
            updated = true;
        }
        if (impact.willpowerAggravated) {
            character.willpowerDamageAggravated += impact.willpowerAggravated;
            if (character.willpowerDamageAggravated < 0)
                character.willpowerDamageAggravated = 0;
            updated = true;
        }
        // TODO: Tratamento de humanidade e outros status
        if (updated) {
            await character.save();
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
