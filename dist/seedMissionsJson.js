"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importMissionsFromJson = importMissionsFromJson;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const models_1 = require("./models");
async function importMissionsFromJson(filePath) {
    const absolutePath = path_1.default.resolve(filePath);
    if (!fs_1.default.existsSync(absolutePath)) {
        console.error(`Arquivo não encontrado: ${absolutePath}`);
        return;
    }
    const rawData = fs_1.default.readFileSync(absolutePath, 'utf-8');
    const missionsData = JSON.parse(rawData);
    if (!Array.isArray(missionsData)) {
        console.error('O JSON deve ser uma lista (array) de missões.');
        return;
    }
    console.log(`Iniciando importação de ${missionsData.length} missões...`);
    for (const m of missionsData) {
        let locationId = null;
        if (m.locationName) {
            const loc = await models_1.DefinitionLocation.findOne({ where: { name: m.locationName } });
            if (loc) {
                locationId = loc.id;
            }
            else {
                console.warn(`Localização "${m.locationName}" não encontrada. A missão "${m.title}" ficará sem local vinculado.`);
            }
        }
        // Processa Rewards: se tiver equipmentDropName, resolve para ID
        const rewards = m.rewardsJson || {};
        if (rewards.equipmentDropName) {
            const eq = await models_1.DefinitionEquipment.findOne({ where: { name: rewards.equipmentDropName } });
            if (eq) {
                rewards.equipmentDropId = eq.id;
            }
            delete rewards.equipmentDropName;
        }
        // Processa Penalties: se tiver lostEquipmentName, resolve para ID
        const penalties = m.penaltiesJson || {};
        if (penalties.lostEquipmentName) {
            const eq = await models_1.DefinitionEquipment.findOne({ where: { name: penalties.lostEquipmentName } });
            if (eq) {
                penalties.lostEquipmentId = eq.id;
            }
            delete penalties.lostEquipmentName;
        }
        // Upsert da Missão
        let mission = await models_1.DefinitionMissionIdle.findOne({ where: { title: m.title } });
        if (!mission) {
            mission = await models_1.DefinitionMissionIdle.create({
                title: m.title,
                description: m.description,
                category: m.category || 'OPERATION',
                durationMinutes: m.durationMinutes || 2,
                baseDifficulty: m.baseDifficulty || 5,
                maxCompletions: m.maxCompletions ?? null,
                locationId,
                rewardsJson: rewards,
                penaltiesJson: penalties
            });
            console.log(`✨ Missão criada: "${m.title}"`);
        }
        else {
            mission.description = m.description;
            mission.category = m.category || 'OPERATION';
            mission.durationMinutes = m.durationMinutes || 2;
            mission.baseDifficulty = m.baseDifficulty || 5;
            mission.maxCompletions = m.maxCompletions ?? null;
            mission.locationId = locationId;
            mission.rewardsJson = rewards;
            mission.penaltiesJson = penalties;
            await mission.save();
            console.log(`🔄 Missão atualizada: "${m.title}"`);
        }
        // Processa Etapas (Actions)
        if (Array.isArray(m.actions)) {
            // Remove ações antigas para evitar duplicidade
            await models_1.DefinitionMissionIdleAction.destroy({ where: { missionId: mission.id } });
            for (const act of m.actions) {
                await models_1.DefinitionMissionIdleAction.create({
                    missionId: mission.id,
                    stepOrder: act.stepOrder,
                    name: act.name,
                    attributeReq: act.attributeReq,
                    skillReq: act.skillReq,
                    difficulty: act.difficulty || 6,
                    description: act.description,
                    successText: act.successText,
                    failureText: act.failureText
                });
            }
            console.log(`  └─ ${m.actions.length} etapas cadastradas com sucesso.`);
        }
    }
    console.log('✅ Importação de missões concluída com sucesso!');
}
// Execução direta via CLI
if (require.main === module) {
    const targetFile = process.argv[2] || '../documentos/exemplos_missoes_afk.json';
    importMissionsFromJson(targetFile)
        .then(() => process.exit(0))
        .catch((err) => {
        console.error('Erro na importação:', err);
        process.exit(1);
    });
}
