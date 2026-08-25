"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./models/index");
async function checkActiveMission() {
    const characterId = '3ea3c809-8491-408b-b11d-805a1a6011c2';
    const active = await index_1.CharacterActiveMission.findOne({
        where: { characterId, status: 'IN_PROGRESS' },
        include: [{ model: index_1.DefinitionMissionIdle, as: 'DefinitionMissionIdle' }]
    });
    if (active) {
        console.log('Missão Ativa encontrada:');
        console.log('ID:', active.id);
        console.log('startedAt:', active.startedAt);
        console.log('expiresAt:', active.expiresAt);
        console.log('stepDurationMinutes:', active.stepDurationMinutes);
        console.log('Mission title:', active.DefinitionMissionIdle?.title);
        console.log('Mission durationMinutes:', active.DefinitionMissionIdle?.durationMinutes);
        console.log('Mission baseDifficulty:', active.DefinitionMissionIdle?.baseDifficulty);
        const diffMin = (new Date(active.expiresAt).getTime() - new Date(active.startedAt).getTime()) / 60000;
        console.log(`Diferença total em minutos: ${diffMin} minutos`);
    }
    else {
        console.log('Nenhuma missão ativa.');
    }
    process.exit(0);
}
checkActiveMission();
