"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const models_1 = require("./models");
async function seedTestMission() {
    try {
        await database_1.default.authenticate();
        console.log(' Conectado ao banco de dados.');
        // Localizar Santana
        const santana = await models_1.DefinitionLocation.findOne({
            where: { name: 'Santana' }
        });
        if (!santana) {
            console.error(' Bairro Santana não encontrado no banco.');
            process.exit(1);
        }
        console.log(`📍 Distrito Santana localizado: ID ${santana.id}`);
        // Cria ou atualiza a missão de teste
        const missionTitle = '[TESTE] Incursão na Aurora de Santana (Alerta Solar 06:00)';
        let mission = await models_1.DefinitionMissionIdle.findOne({
            where: {
                locationId: santana.id,
                title: missionTitle
            }
        });
        if (!mission) {
            mission = await models_1.DefinitionMissionIdle.create({
                locationId: santana.id,
                title: missionTitle,
                description: 'Missão especial de teste com 1 minuto de duração real. Ao ser despachada, consome 10 horas e avança o relógio noturno para as 06:00 (Amanhecer), disparando o Alerta Solar e ativando os abrigos de emergência (Hotel, Esgoto e Refúgio).',
                category: 'OPERATION',
                baseDifficulty: 10, // Faz avançar 600 minutos (06:00)
                durationMinutes: 1, // 1 minuto real
                allowedRequirements: {},
                rewardsJson: {
                    money: 500,
                    exp: 5,
                    hunger: 0
                },
                penaltiesJson: {
                    healthDamageSuperficial: 0
                }
            });
            console.log(` Missão de teste criada com ID: ${mission.id}`);
        }
        else {
            mission.baseDifficulty = 10;
            mission.durationMinutes = 1;
            await mission.save();
            console.log(` Missão de teste atualizada com ID: ${mission.id}`);
        }
        // Criar as 2 etapas (ações)
        await models_1.DefinitionMissionIdleAction.destroy({
            where: { missionId: mission.id }
        });
        await models_1.DefinitionMissionIdleAction.create({
            missionId: mission.id,
            name: 'Vigilância Noturna no Mirante de Santana',
            description: 'Você sobe ao ponto mais alto do bairro para monitorar as movimentações enquanto a noite se esgota.',
            stepOrder: 1,
            attributeReq: 'Percepção',
            skillReq: 'Investigação',
            difficulty: 6,
            successText: 'Você identificou comboios suspeitos cruzando a zona norte.',
            failureText: 'A neblina e as luzes da cidade ofuscaram sua visão.'
        });
        await models_1.DefinitionMissionIdleAction.create({
            missionId: mission.id,
            name: 'Aproximação dos Primeiros Raios da Manhã',
            description: 'O relógio avança implacavelmente em direção às 06:00 da manhã. O sol rompe o horizonte.',
            stepOrder: 2,
            attributeReq: 'Destreza',
            skillReq: 'Furtividade',
            difficulty: 6,
            successText: 'Você recolheu seus equipamentos rapidamente enquanto a luz do dia avermelha o céu.',
            failureText: 'Você se atrasou e sentiu o calor dos primeiros raios solares no asfalto.'
        });
        console.log('✅ Ações da missão de teste inseridas com sucesso em Santana!');
        process.exit(0);
    }
    catch (error) {
        console.error('❌ Erro ao rodar seed de teste:', error);
        process.exit(1);
    }
}
seedTestMission();
