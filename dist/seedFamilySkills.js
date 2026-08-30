"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLASS_SKILLS_DATA = void 0;
const db_1 = __importDefault(require("./config/db"));
const models_1 = require("./models");
exports.CLASS_SKILLS_DATA = [
    // --- CURANDEIRA ✨ ---
    {
        id: 'skill_curandeira_1',
        characterClass: 'CURANDEIRA',
        tier: 1,
        name: 'Luz Restauradora I',
        description: 'Invoca uma centelha de luz suave que cura 35 HP de um aliado ou do próprio herói.',
        icon: '✨',
        costXp: 50,
        requiredSkillId: null,
        effectType: 'HEAL_SINGLE',
        power: 35,
        costMp: 10,
        orderIndex: 1,
    },
    {
        id: 'skill_curandeira_2',
        characterClass: 'CURANDEIRA',
        tier: 2,
        name: 'Luz Restauradora II Plus',
        description: 'Canaliza a energia solar dos laços familiares, curando 70 HP e revigorando o alvo.',
        icon: '🌟',
        costXp: 100,
        requiredSkillId: 'skill_curandeira_1',
        effectType: 'HEAL_SINGLE',
        power: 70,
        costMp: 20,
        orderIndex: 2,
    },
    {
        id: 'skill_curandeira_3',
        characterClass: 'CURANDEIRA',
        tier: 3,
        name: 'Prece da Família III (Mestre)',
        description: 'Prece suprema do clã que cura 60 HP de TODOS os membros do grupo simultaneamente!',
        icon: '💖',
        costXp: 200,
        requiredSkillId: 'skill_curandeira_2',
        effectType: 'HEAL_ALL',
        power: 60,
        costMp: 35,
        orderIndex: 3,
    },
    // --- ARQUEIRO 🏹 ---
    {
        id: 'skill_arqueiro_1',
        characterClass: 'ARQUEIRO',
        tier: 1,
        name: 'Tiro de Precisão I',
        description: 'Disparo à longa distância certeiro que causa 30 de dano físico sem risco de contra-ataque imediato.',
        icon: '🏹',
        costXp: 50,
        requiredSkillId: null,
        effectType: 'RANGED_ATTACK',
        power: 30,
        costMp: 10,
        orderIndex: 1,
    },
    {
        id: 'skill_arqueiro_2',
        characterClass: 'ARQUEIRO',
        tier: 2,
        name: 'Disparo Perfurante II Plus',
        description: 'Flecha encantada que perfura as defesas do chefe causando 65 de dano crítico.',
        icon: '🎯',
        costXp: 100,
        requiredSkillId: 'skill_arqueiro_1',
        effectType: 'RANGED_ATTACK',
        power: 65,
        costMp: 20,
        orderIndex: 2,
    },
    {
        id: 'skill_arqueiro_3',
        characterClass: 'ARQUEIRO',
        tier: 3,
        name: 'Chuva de Flechas Celestes III (Mestre)',
        description: 'Dispara dezenas de flechas arcanas de longe, causando 110 de dano devastador ao inimigo.',
        icon: '🌠',
        costXp: 200,
        requiredSkillId: 'skill_arqueiro_2',
        effectType: 'RANGED_AOE',
        power: 110,
        costMp: 35,
        orderIndex: 3,
    },
    // --- GUERREIRO ⚔️ ---
    {
        id: 'skill_guerreiro_1',
        characterClass: 'GUERREIRO',
        tier: 1,
        name: 'Golpe Pesado I',
        description: 'Golpe firme com arma branca que causa 35 de dano corpo a corpo.',
        icon: '⚔️',
        costXp: 50,
        requiredSkillId: null,
        effectType: 'MELEE_HEAVY',
        power: 35,
        costMp: 10,
        orderIndex: 1,
    },
    {
        id: 'skill_guerreiro_2',
        characterClass: 'GUERREIRO',
        tier: 2,
        name: 'Fúria Destruidora II Plus',
        description: 'Ataque avassalador que quebra o equilíbrio do monstro causando 75 de dano.',
        icon: '💥',
        costXp: 100,
        requiredSkillId: 'skill_guerreiro_1',
        effectType: 'MELEE_HEAVY',
        power: 75,
        costMp: 20,
        orderIndex: 2,
    },
    {
        id: 'skill_guerreiro_3',
        characterClass: 'GUERREIRO',
        tier: 3,
        name: 'Lâmina do Titã III (Mestre)',
        description: 'Corte titânico que fende o chão e causa 125 de dano brutal ao chefe!',
        icon: '🌋',
        costXp: 200,
        requiredSkillId: 'skill_guerreiro_2',
        effectType: 'MELEE_HEAVY',
        power: 125,
        costMp: 35,
        orderIndex: 3,
    },
    // --- PALADINO 🛡️ ---
    {
        id: 'skill_paladino_1',
        characterClass: 'PALADINO',
        tier: 1,
        name: 'Escudo Sagrado I',
        description: 'Ergue uma barreira de fé que bloqueia 30 de dano do próximo golpe inimigo.',
        icon: '🛡️',
        costXp: 50,
        requiredSkillId: null,
        effectType: 'SHIELD',
        power: 30,
        costMp: 10,
        orderIndex: 1,
    },
    {
        id: 'skill_paladino_2',
        characterClass: 'PALADINO',
        tier: 2,
        name: 'Julgamento da Luz II Plus',
        description: 'Golpe sagrado que causa 50 de dano ao inimigo e recupera 25 HP para o herói.',
        icon: '☀️',
        costXp: 100,
        requiredSkillId: 'skill_paladino_1',
        effectType: 'SHIELD',
        power: 50,
        costMp: 20,
        orderIndex: 2,
    },
    {
        id: 'skill_paladino_3',
        characterClass: 'PALADINO',
        tier: 3,
        name: 'Bastião Inabalável III (Mestre)',
        description: 'Invoca a proteção máxima dos anjos, tornando o grupo imune ao próximo ataque do monstro!',
        icon: '🏰',
        costXp: 200,
        requiredSkillId: 'skill_paladino_2',
        effectType: 'SHIELD',
        power: 100,
        costMp: 35,
        orderIndex: 3,
    },
    // --- MAGO 🔥 ---
    {
        id: 'skill_mago_1',
        characterClass: 'MAGO',
        tier: 1,
        name: 'Míssil Arcano I',
        description: 'Projéteis arcanos teleguiados que causam 35 de dano mágico.',
        icon: '🔮',
        costXp: 50,
        requiredSkillId: null,
        effectType: 'MAGIC_AOE',
        power: 35,
        costMp: 10,
        orderIndex: 1,
    },
    {
        id: 'skill_mago_2',
        characterClass: 'MAGO',
        tier: 2,
        name: 'Bola de Fogo II Plus',
        description: 'Esfera ígnea explosiva que incinera o monstro causando 75 de dano de fogo.',
        icon: '🔥',
        costXp: 100,
        requiredSkillId: 'skill_mago_1',
        effectType: 'MAGIC_AOE',
        power: 75,
        costMp: 20,
        orderIndex: 2,
    },
    {
        id: 'skill_mago_3',
        characterClass: 'MAGO',
        tier: 3,
        name: 'Cometa Cósmico III (Mestre)',
        description: 'Invoca um meteoro das estrelas que causa 130 de dano mágico colossal!',
        icon: '☄️',
        costXp: 200,
        requiredSkillId: 'skill_mago_2',
        effectType: 'MAGIC_AOE',
        power: 130,
        costMp: 35,
        orderIndex: 3,
    },
    // --- LADINO 🗡️ ---
    {
        id: 'skill_ladino_1',
        characterClass: 'LADINO',
        tier: 1,
        name: 'Ataque Furtivo I',
        description: 'Ataque rápido pelas costas causando 40 de dano crítico.',
        icon: '🗡️',
        costXp: 50,
        requiredSkillId: null,
        effectType: 'STEALTH_CRIT',
        power: 40,
        costMp: 10,
        orderIndex: 1,
    },
    {
        id: 'skill_ladino_2',
        characterClass: 'LADINO',
        tier: 2,
        name: 'Bomba de Fumaça II Plus',
        description: 'Lança fumaça densa causando 55 de dano e garantindo esquiva do próximo golpe.',
        icon: '💨',
        costXp: 100,
        requiredSkillId: 'skill_ladino_1',
        effectType: 'STEALTH_CRIT',
        power: 55,
        costMp: 20,
        orderIndex: 2,
    },
    {
        id: 'skill_ladino_3',
        characterClass: 'LADINO',
        tier: 3,
        name: 'Dança das Sombras III (Mestre)',
        description: 'Série de 5 golpes invisíveis nas fraquezas do monstro causando 120 de dano!',
        icon: '👤',
        costXp: 200,
        requiredSkillId: 'skill_ladino_2',
        effectType: 'STEALTH_CRIT',
        power: 120,
        costMp: 35,
        orderIndex: 3,
    },
];
async function seedFamilySkills() {
    console.log('🌳 Sincronizando Árvore de Habilidades por Graus da Família Lira...');
    try {
        await db_1.default.authenticate();
        console.log('✅ Conexão com o banco de dados OK.');
        // Sincronização segura das novas tabelas
        await models_1.FamilyCharacter.sync({ alter: true });
        await models_1.FamilyClassSkill.sync({ alter: true });
        await models_1.FamilyCharacterSkill.sync({ alter: true });
        console.log('✅ Tabelas family_class_skills e family_character_skills sincronizadas.');
        // Popula as habilidades da árvore
        for (const skill of exports.CLASS_SKILLS_DATA) {
            const [record, created] = await models_1.FamilyClassSkill.findOrCreate({
                where: { id: skill.id },
                defaults: skill,
            });
            if (!created) {
                await record.update(skill);
            }
        }
        console.log(`✅ ${exports.CLASS_SKILLS_DATA.length} Habilidades cadastradas com sucesso.`);
        // Desbloqueia automaticamente a habilidade Grau I correspondente à classe de cada herói existente
        const characters = await models_1.FamilyCharacter.findAll();
        for (const char of characters) {
            const starterSkill = await models_1.FamilyClassSkill.findOne({
                where: {
                    characterClass: char.characterClass,
                    tier: 1,
                },
            });
            if (starterSkill) {
                await models_1.FamilyCharacterSkill.findOrCreate({
                    where: {
                        characterId: char.id,
                        skillId: starterSkill.id,
                    },
                    defaults: {
                        characterId: char.id,
                        skillId: starterSkill.id,
                        isEquipped: true,
                    },
                });
            }
        }
        console.log('✅ Habilidades iniciais concedidas e equipadas aos heróis existentes.');
        console.log('🎉 Seed de Habilidades concluído com sucesso!');
    }
    catch (error) {
        console.error('❌ Erro no seed de Habilidades da Família:', error);
    }
}
seedFamilySkills().then(() => {
    process.exit(0);
});
