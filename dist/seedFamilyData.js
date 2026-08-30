"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const models_1 = require("./models");
async function seedFamilyData() {
    console.log('🌟 Iniciando Seed e Sincronização do Jogo da Família Lira...');
    try {
        // Sincroniza tabelas do módulo de família de forma aditiva e segura
        await db_1.default.authenticate();
        console.log('✅ Conexão com o banco de dados OK.');
        // Sincroniza apenas as novas tabelas da família
        await models_1.FamilyCharacter.sync({ alter: false });
        await models_1.FamilyTask.sync({ alter: false });
        await models_1.FamilyTaskLog.sync({ alter: false });
        await models_1.FamilyBattle.sync({ alter: false });
        await models_1.FamilyBattleParticipant.sync({ alter: false });
        await models_1.FamilyShopItem.sync({ alter: false });
        console.log('✅ Tabelas da Família sincronizadas com sucesso.');
        // 1. Seed dos 7 Personagens da Família
        const charactersCount = await models_1.FamilyCharacter.count();
        if (charactersCount === 0) {
            console.log('🌱 Criando os 7 Heróis da Família Lira...');
            await models_1.FamilyCharacter.bulkCreate([
                {
                    name: 'Kael Lira',
                    characterClass: 'PALADINO',
                    title: 'Guardião da Casa',
                    avatarUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=60',
                    level: 5,
                    currentXp: 40,
                    nextLevelXp: 200,
                    gold: 50,
                    hpCurrent: 180,
                    hpMax: 180,
                    mpCurrent: 80,
                    mpMax: 80,
                    strength: 16,
                    vitality: 16,
                    agility: 12,
                    wisdom: 12,
                    heartBond: 18,
                    equippedWeapon: 'Espada Guardiã da Família',
                    equippedArmor: 'Armadura Dourada de Titânio',
                    equippedPet: 'Lobo Guardião',
                    isParent: true,
                    orderIndex: 1,
                },
                {
                    name: 'Helena Lira',
                    characterClass: 'CURANDEIRA',
                    title: 'A Tecedora de Luz',
                    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60',
                    level: 5,
                    currentXp: 60,
                    nextLevelXp: 200,
                    gold: 60,
                    hpCurrent: 150,
                    hpMax: 150,
                    mpCurrent: 120,
                    mpMax: 120,
                    strength: 10,
                    vitality: 14,
                    agility: 13,
                    wisdom: 18,
                    heartBond: 20,
                    equippedWeapon: 'Cajado de Luz Cósmica',
                    equippedArmor: 'Manto Estelar Protetor',
                    equippedPet: 'Coruja Branca Mágica',
                    isParent: true,
                    orderIndex: 2,
                },
                {
                    name: 'Arthur Lira',
                    characterClass: 'GUERREIRO',
                    title: 'Guerreiro da Tempestade',
                    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60',
                    level: 2,
                    currentXp: 30,
                    nextLevelXp: 120,
                    gold: 25,
                    hpCurrent: 120,
                    hpMax: 120,
                    mpCurrent: 40,
                    mpMax: 40,
                    strength: 15,
                    vitality: 13,
                    agility: 12,
                    wisdom: 10,
                    heartBond: 14,
                    equippedWeapon: 'Espada Flamejante',
                    equippedArmor: 'Cota de Malha de Ferro',
                    equippedPet: null,
                    isParent: false,
                    orderIndex: 3,
                },
                {
                    name: 'Lucas Lira',
                    characterClass: 'MAGO',
                    title: 'Mago do Fogo Astral',
                    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500&auto=format&fit=crop&q=60',
                    level: 2,
                    currentXp: 50,
                    nextLevelXp: 120,
                    gold: 30,
                    hpCurrent: 100,
                    hpMax: 100,
                    mpCurrent: 80,
                    mpMax: 80,
                    strength: 9,
                    vitality: 10,
                    agility: 12,
                    wisdom: 16,
                    heartBond: 13,
                    equippedWeapon: 'Varinha de Cristal Rubi',
                    equippedArmor: 'Túnica Arcana Azul',
                    equippedPet: 'Dragãozinho Vermelho',
                    isParent: false,
                    orderIndex: 4,
                },
                {
                    name: 'Gabriel Lira',
                    characterClass: 'ARQUEIRO',
                    title: 'Arqueiro Sentinela',
                    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60',
                    level: 2,
                    currentXp: 45,
                    nextLevelXp: 120,
                    gold: 20,
                    hpCurrent: 110,
                    hpMax: 110,
                    mpCurrent: 50,
                    mpMax: 50,
                    strength: 12,
                    vitality: 11,
                    agility: 16,
                    wisdom: 11,
                    heartBond: 12,
                    equippedWeapon: 'Arco Élfico de Caça',
                    equippedArmor: 'Traje de Couro Furtivo',
                    equippedPet: null,
                    isParent: false,
                    orderIndex: 5,
                },
                {
                    name: 'Sofia Lira',
                    characterClass: 'INVOCADORA',
                    title: 'Mestre das Feras e Encantos',
                    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60',
                    level: 1,
                    currentXp: 20,
                    nextLevelXp: 100,
                    gold: 15,
                    hpCurrent: 100,
                    hpMax: 100,
                    mpCurrent: 60,
                    mpMax: 60,
                    strength: 10,
                    vitality: 10,
                    agility: 11,
                    wisdom: 14,
                    heartBond: 16,
                    equippedWeapon: 'Flauta Mágica de Domar',
                    equippedArmor: 'Vestido Encantado Verde',
                    equippedPet: 'Gatinho Alado',
                    isParent: false,
                    orderIndex: 6,
                },
                {
                    name: 'Mateus Lira',
                    characterClass: 'LADINO',
                    title: 'Ladino Veloz & Bardo',
                    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60',
                    level: 1,
                    currentXp: 10,
                    nextLevelXp: 100,
                    gold: 15,
                    hpCurrent: 100,
                    hpMax: 100,
                    mpCurrent: 50,
                    mpMax: 50,
                    strength: 11,
                    vitality: 10,
                    agility: 15,
                    wisdom: 12,
                    heartBond: 13,
                    equippedWeapon: 'Adagas Duplas de Prata',
                    equippedArmor: 'Capa da Invisibilidade',
                    equippedPet: null,
                    isParent: false,
                    orderIndex: 7,
                },
            ]);
            console.log('✅ 7 Heróis criados com sucesso!');
        }
        // 2. Seed das Tarefas Diárias da Casa
        const tasksCount = await models_1.FamilyTask.count();
        if (tasksCount === 0) {
            console.log('🌱 Criando Tarefas da Casa...');
            await models_1.FamilyTask.bulkCreate([
                {
                    title: 'Lavar a Louça do Almoço/Jantar',
                    description: 'Lavar todos os pratos, talheres e panelas com capricho e secar a pia.',
                    category: 'CHORE',
                    rewardXp: 50,
                    rewardGold: 10,
                    icon: '🍽️',
                    cooldownHours: 12,
                },
                {
                    title: 'Arrumar a Própria Cama e Quarto',
                    description: 'Esticar o lençol, dobrar cobertor e guardar roupas e calçados nos lugares.',
                    category: 'CHORE',
                    rewardXp: 30,
                    rewardGold: 5,
                    icon: '🛏️',
                    cooldownHours: 24,
                },
                {
                    title: 'Buscar Pão na Padaria',
                    description: 'Ir com atenção à padaria, conferir o troco e trazer os pães quentinhos.',
                    category: 'CHORE',
                    rewardXp: 35,
                    rewardGold: 8,
                    icon: '🥖',
                    cooldownHours: 24,
                },
                {
                    title: 'Levar o Lixo para Fora',
                    description: 'Recolher os sacos de lixo da cozinha e banheiros e colocar na lixeira da rua.',
                    category: 'CHORE',
                    rewardXp: 20,
                    rewardGold: 5,
                    icon: '🗑️',
                    cooldownHours: 24,
                },
                {
                    title: 'Fazer a Lição de Casa no Prazo',
                    description: 'Completar todas as tarefas escolares do dia sem enrolação e com capricho.',
                    category: 'STUDY',
                    rewardXp: 80,
                    rewardGold: 15,
                    icon: '📚',
                    cooldownHours: 24,
                },
                {
                    title: 'Ler 15 Minutos de um Livro',
                    description: 'Momento de leitura concentrada em um livro legal para expandir a imaginação.',
                    category: 'STUDY',
                    rewardXp: 40,
                    rewardGold: 10,
                    icon: '📖',
                    cooldownHours: 24,
                },
                {
                    title: 'Ajudar um Irmão com Carinho',
                    description: 'Ensinar algo, ajudar em uma tarefa ou compartilhar um brinquedo com alegria.',
                    category: 'VIRTUE',
                    rewardXp: 60,
                    rewardGold: 12,
                    icon: '💖',
                    cooldownHours: 24,
                },
                {
                    title: 'Dia Inteiro Sem Brigas nem Reclamações',
                    description: 'Manter a harmonia, falar com gentileza e obedecer aos pais com sorriso no rosto.',
                    category: 'VIRTUE',
                    rewardXp: 70,
                    rewardGold: 15,
                    icon: '🌟',
                    cooldownHours: 24,
                },
                {
                    title: 'Comer Salada e Fruta na Refeição',
                    description: 'Alimentar-se de forma saudável com legumes, verduras e frutas sem fazer careta.',
                    category: 'HEALTH',
                    rewardXp: 35,
                    rewardGold: 8,
                    icon: '🥗',
                    cooldownHours: 12,
                },
                {
                    title: 'Escovar os Dentes e Banho no Horário',
                    description: 'Higiene pessoal perfeita na hora combinada sem precisar de aviso extra.',
                    category: 'HEALTH',
                    rewardXp: 25,
                    rewardGold: 5,
                    icon: '🪥',
                    cooldownHours: 24,
                },
            ]);
            console.log('✅ 10 Tarefas da Casa criadas!');
        }
        // 3. Seed dos Itens da Loja e Recompensas Reais
        const shopCount = await models_1.FamilyShopItem.count();
        if (shopCount === 0) {
            console.log('🌱 Criando Itens da Loja e Recompensas Reais...');
            await models_1.FamilyShopItem.bulkCreate([
                // Itens do Jogo
                {
                    name: 'Espada de Fogo Valiriana',
                    description: 'Aumenta o dano de ataque em +5 nas batalhas.',
                    itemType: 'GAME_EQUIPMENT',
                    costGold: 80,
                    statsJson: { attackBonus: 5 },
                    icon: '🗡️',
                },
                {
                    name: 'Escudo Guardião Dourado',
                    description: 'Aumenta a defesa e absorção de dano em +5.',
                    itemType: 'GAME_EQUIPMENT',
                    costGold: 75,
                    statsJson: { defenseBonus: 5 },
                    icon: '🛡️',
                },
                {
                    name: 'Cajado das Estrelas Mágicas',
                    description: 'Aumenta o poder de magias e curas em +6.',
                    itemType: 'GAME_EQUIPMENT',
                    costGold: 90,
                    statsJson: { magicBonus: 6 },
                    icon: '🔮',
                },
                {
                    name: 'Dragãozinho de Fogo (Mascote)',
                    description: 'Um companheiro leal que cospe fogo nos monstros (+3 Magia).',
                    itemType: 'GAME_PET',
                    costGold: 120,
                    statsJson: { petBonus: 3 },
                    icon: '🐉',
                },
                {
                    name: 'Mega Poção da Família',
                    description: 'Restaura 100% da vida e mana de quem usar.',
                    itemType: 'GAME_POTION',
                    costGold: 25,
                    statsJson: { restoreAll: true },
                    icon: '🧪',
                },
                // Recompensas Reais
                {
                    name: '1 Hora Extra de Videogame',
                    description: 'Vale 1 hora a mais de jogo no videogame ou celular no fim de semana!',
                    itemType: 'REAL_REWARD',
                    costGold: 100,
                    statsJson: { realReward: true },
                    icon: '🎮',
                },
                {
                    name: 'Escolher o Sabor da Pizza de Sexta',
                    description: 'Você escolhe a metade da pizza que mais gosta para o jantar da família!',
                    itemType: 'REAL_REWARD',
                    costGold: 150,
                    statsJson: { realReward: true },
                    icon: '🍕',
                },
                {
                    name: 'Escolher o Filme do Cinema em Família',
                    description: 'Você tem o poder supremo do controle remoto na noite do filme!',
                    itemType: 'REAL_REWARD',
                    costGold: 80,
                    statsJson: { realReward: true },
                    icon: '🎬',
                },
                {
                    name: 'Vale Sorvete Especial na Sorveteria',
                    description: 'Um sorvete com 2 bolas e todas as coberturas que você quiser!',
                    itemType: 'REAL_REWARD',
                    costGold: 120,
                    statsJson: { realReward: true },
                    icon: '🍦',
                },
                {
                    name: 'Dormir 30 Minutos Mais Tarde no Sábado',
                    description: 'Aproveitar a noite de sábado um pouquinho mais antes de ir para a cama.',
                    itemType: 'REAL_REWARD',
                    costGold: 90,
                    statsJson: { realReward: true },
                    icon: '🛌',
                },
                {
                    name: 'Super Vale: Brinquedo ou Jogo na Loja',
                    description: 'A super meta! Um presente escolhido por você na loja de brinquedos!',
                    itemType: 'REAL_REWARD',
                    costGold: 500,
                    statsJson: { realReward: true },
                    icon: '🎁',
                },
            ]);
            console.log('✅ Itens da Loja e Recompensas Reais criados!');
        }
        // 4. Seed da Batalha Piloto
        const battleCount = await models_1.FamilyBattle.count();
        if (battleCount === 0) {
            console.log('🌱 Criando a Batalha Piloto contra o Golem da Bagunça...');
            const allMembers = await models_1.FamilyCharacter.findAll({ order: [['orderIndex', 'ASC']] });
            const turnOrder = allMembers.map(m => m.id);
            turnOrder.push('MONSTER');
            await models_1.FamilyBattle.create({
                title: 'A Batalha do Quarto dos Brinquedos',
                monsterName: 'O Golem da Bagunça',
                monsterAvatar: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60',
                monsterHpCurrent: 600,
                monsterHpMax: 600,
                monsterAttack: 25,
                monsterDefense: 5,
                rewardXp: 180,
                rewardGold: 60,
                status: 'IN_PROGRESS',
                currentTurnOrder: turnOrder,
                activeTurnIndex: 0,
                battleLogs: [
                    '⚔️ O temível Golem da Bagunça surgiu no meio do quarto!',
                    '✨ A Família Lira ergue suas armas e se prepara para a vitória!',
                ],
            });
            console.log('✅ Batalha Piloto criada com sucesso!');
        }
        console.log('🎉 Seed do Jogo da Família Lira CONCLUÍDO COM SUCESSO!');
    }
    catch (error) {
        console.error('❌ Erro no seed da família:', error);
    }
}
// Executa o seed
seedFamilyData().then(() => {
    console.log('Processo finalizado.');
    process.exit(0);
});
