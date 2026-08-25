"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const models_1 = require("./models");
// Gera a matriz das 9 missões para uma Região / Zona
function generateMatrixForZone(zoneName) {
    return [
        // 💪 1. PILAR FÍSICO
        {
            pilar: 'FÍSICO',
            attrName: 'Força',
            skillName: 'Briga',
            title: `Demolição Silenciosa do Depósito Ventrue (${zoneName})`,
            description: `Incursão de força bruta para destruir a cadeia de suprimentos e os contêineres blindados da Camarilla no setor de ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 4,
            durationMinutes: 3,
            actionsCount: 3,
            rewards: {
                money: 900,
                exp: 6,
                attributeTrained: 'Força',
                skillTrained: 'Briga',
                equipmentDropName: 'Soco Inglês'
            },
            penalties: {
                healthDamageSuperficial: 2,
                hunger: 1
            },
            actions: [
                {
                    name: 'Arrombamento dos Portões de Aço',
                    description: 'Forçar as travas hidráulicas da entrada secundária.',
                    attributeReq: 'Força',
                    skillReq: 'Briga',
                    difficulty: 4,
                    successText: 'Com força sobrenatural, você entortou as trancas de aço sem disparar os sensores sísmicos.',
                    failureText: 'O alarme mecânico travou a porta e feriu seus braços na tentativa de forçar.'
                },
                {
                    name: 'Subjugação dos Guardas Carniçais',
                    description: 'Combate corpo a corpo pesado contra os seguranças armados.',
                    attributeReq: 'Força',
                    skillReq: 'Briga',
                    difficulty: 4,
                    successText: 'Você nocauteou os guardas com golpes devastadores antes que pudessem sacar suas armas.',
                    failureText: 'Os guardas resistiram e desferiram golpes de cassetete reforçado.'
                },
                {
                    name: 'Destruição das Cargas Blindadas',
                    description: 'Destroçar o carregamento de vitae refinada e contratos comerciais.',
                    attributeReq: 'Força',
                    skillReq: 'Briga',
                    difficulty: 4,
                    successText: 'Os paletes foram totalmente destruídos, arruinando a logística rival.',
                    failureText: 'Você precisou bater em retirada antes de completar a demolição total.'
                }
            ]
        },
        {
            pilar: 'FÍSICO',
            attrName: 'Destreza',
            skillName: 'Ladroagem',
            title: `Infiltração no Cofre do Magnata Ventrue (${zoneName})`,
            description: `Invasão acrobática através de dutos e sensores a laser para violar o cofre de títulos imobiliários em ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 6,
            durationMinutes: 5,
            actionsCount: 5,
            rewards: {
                money: 4500,
                exp: 12,
                attributeTrained: 'Destreza',
                skillTrained: 'Ladroagem',
                equipmentDropName: 'Camisa Armadura'
            },
            penalties: {
                healthDamageSuperficial: 3,
                stains: 1,
                hunger: 1
            },
            actions: [
                {
                    name: 'Descida pelos Dutos Verticais',
                    description: 'Acrobacias no poço do elevador desligado.',
                    attributeReq: 'Destreza',
                    skillReq: 'Atletismo',
                    difficulty: 6,
                    successText: 'Descida impecável sem emitir um único ruído nos cabos de sustentação.',
                    failureText: 'Um escorregão quase o arremessou no fundo do fosso.'
                },
                {
                    name: 'Esquiva da Malha de Lasers Térmicos',
                    description: 'Desvio contorcionista entre os feixes infravermelhos.',
                    attributeReq: 'Destreza',
                    skillReq: 'Furtividade',
                    difficulty: 6,
                    successText: 'Você cruzou o corredor com precisão milimétrica.',
                    failureText: 'Um feixe tocou suas roupas, acionando a luz âmbar do sistema.'
                },
                {
                    name: 'Gazua nas Fechaduras Suíças',
                    description: 'Manipulação de ferramentas finas no segredo do cofre.',
                    attributeReq: 'Destreza',
                    skillReq: 'Ladroagem',
                    difficulty: 6,
                    successText: 'Os cinco pinos mecânicos cederam em segundos.',
                    failureText: 'A gazua entortou e você perdeu tempo precioso tentando destravá-la.'
                },
                {
                    name: 'Coleta dos Títulos ao Portador',
                    description: 'Extrair os documentos confidenciais e barras de ouro.',
                    attributeReq: 'Destreza',
                    skillReq: 'Ladroagem',
                    difficulty: 6,
                    successText: 'Todo o conteúdo valioso foi guardado na mochila tática.',
                    failureText: 'Você deixou cair alguns comprovantes marcados com tinta química.'
                },
                {
                    name: 'Extração Silenciosa pela Cobertura',
                    description: 'Fuga pelo heliponto nas sombras da madrugada.',
                    attributeReq: 'Destreza',
                    skillReq: 'Furtividade',
                    difficulty: 6,
                    successText: 'Você desapareceu na noite sem deixar pegadas ou digitais.',
                    failureText: 'Câmeras de trânsito captaram seu vulto saltando entre os prédios.'
                }
            ]
        },
        {
            pilar: 'FÍSICO',
            attrName: 'Vigor',
            skillName: 'Armas de Fogo',
            title: `Emboscada na Rota dos Blindados da AlphaSecurity (${zoneName})`,
            description: `Confronto armado de alta intensidade para interceptar o comboio blindado transportando tecnologia e armas pesadas em ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 8,
            durationMinutes: 10,
            actionsCount: 10,
            rewards: {
                money: 11500,
                exp: 22,
                attributeTrained: 'Vigor',
                skillTrained: 'Armas de Fogo',
                equipmentDropName: 'Colete a Prova de Balas'
            },
            penalties: {
                healthDamageAggravated: 1,
                willpowerDamageAggravated: 1,
                stains: 2,
                hunger: 1
            },
            actions: Array.from({ length: 10 }).map((_, i) => ({
                name: `Onda de Confronto Blindado ${i + 1}/10`,
                description: `Troca de tiros e resistência a estilhaços e chumbo grosso contra os agentes da AlphaSecurity.`,
                attributeReq: 'Vigor',
                skillReq: 'Armas de Fogo',
                difficulty: 8,
                successText: `Você resistiu aos impactos balísticos e abateu os mercenários da etapa ${i + 1}.`,
                failureText: `Projéteis perfurantes rasgaram sua carne morta, causando dano severo.`
            }))
        },
        // 🎭 2. PILAR SOCIAL
        {
            pilar: 'SOCIAL',
            attrName: 'Carisma',
            skillName: 'Persuasão',
            title: `Caçada no Coquetel da Embaixada (${zoneName})`,
            description: `Alimentação sutil e elegante entre diplomatas, magnatas e celebridades em ${zoneName}.`,
            category: 'HUNT',
            difficulty: 3,
            durationMinutes: 1,
            actionsCount: 2,
            rewards: {
                money: 280,
                exp: 3,
                hunger: -2,
                attributeTrained: 'Carisma',
                skillTrained: 'Persuasão'
            },
            penalties: {
                stains: 1,
                hunger: 1
            },
            actions: [
                {
                    name: 'Charme & Aproximação no Salão Nobre',
                    description: 'Envolver uma presa refinada em uma conversa magnética.',
                    attributeReq: 'Carisma',
                    skillReq: 'Persuasão',
                    difficulty: 3,
                    successText: 'Sua presença irresistível atraiu a atenção da presa para uma varanda reservada.',
                    failureText: 'Sua tentativa de flerte soou artificial e a presa se afastou.'
                },
                {
                    name: 'O Beijo Proibido nas Sombras',
                    description: 'Alimentar-se no balcão escuro sem deixar ferimentos visíveis.',
                    attributeReq: 'Carisma',
                    skillReq: 'Persuasão',
                    difficulty: 3,
                    successText: 'O êxtase do Beijo envolveu o mortal, permitindo uma alimentação farta e sem alarde.',
                    failureText: 'O mortal sentiu uma tontura brusca e derrubou uma taça no chão.'
                }
            ]
        },
        {
            pilar: 'SOCIAL',
            attrName: 'Manipulação',
            skillName: 'Subterfúgio',
            title: `Chantagem contra o Executivo do Fundo Blindado (${zoneName})`,
            description: `Operação de coerção psicológica e chantagem corporativa para submeter um magnata mortal em ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 5,
            durationMinutes: 3,
            actionsCount: 3,
            rewards: {
                money: 1100,
                exp: 7,
                attributeTrained: 'Manipulação',
                skillTrained: 'Subterfúgio',
                equipmentDropName: 'SigSauer P226'
            },
            penalties: {
                healthDamageSuperficial: 1,
                stains: 1,
                hunger: 1
            },
            actions: [
                {
                    name: 'Apresentação dos Dossiês Comprometedoras',
                    description: 'Mostrar provas irrefutáveis de fraudes fiscais e traições.',
                    attributeReq: 'Manipulação',
                    skillReq: 'Subterfúgio',
                    difficulty: 5,
                    successText: 'O executivo empalideceu diante dos documentos irrefutáveis.',
                    failureText: 'O magnata tentou blefar e ameaçou acionar seguranças particulares.'
                },
                {
                    name: 'Pressão Psicológica Velada',
                    description: 'Impor termos de pagamento e subserviência à Máscara.',
                    attributeReq: 'Manipulação',
                    skillReq: 'Intimidação',
                    difficulty: 5,
                    successText: 'A vontade do mortal foi completamente quebrada, aceitando todas as exigências.',
                    failureText: 'O mortal teve uma crise histérica e tentou fugir pela sala de reuniões.'
                },
                {
                    name: 'Assinatura das Transferências Bancárias',
                    description: 'Garantir a transferência de fundos para contas offshore.',
                    attributeReq: 'Manipulação',
                    skillReq: 'Subterfúgio',
                    difficulty: 5,
                    successText: 'Os fundos foram depositados instantaneamente em sua conta oculta.',
                    failureText: 'O banco bloqueou a transferência preliminar por suspeita de fraude.'
                }
            ]
        },
        {
            pilar: 'SOCIAL',
            attrName: 'Autocontrole',
            skillName: 'Etiqueta',
            title: `A Sabotagem do Leilão de Sangue Secreto (${zoneName})`,
            description: `Infiltração de sangue-frio em um leilão clandestino de relíquias e cativos do Sabá em ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 7,
            durationMinutes: 10,
            actionsCount: 10,
            rewards: {
                money: 8500,
                exp: 18,
                attributeTrained: 'Autocontrole',
                skillTrained: 'Etiqueta',
                equipmentDropName: 'Heckler & Koch MP-5'
            },
            penalties: {
                healthDamageAggravated: 1,
                willpowerDamageAggravated: 1,
                stains: 2,
                hunger: 1
            },
            actions: Array.from({ length: 10 }).map((_, i) => ({
                name: `Tensão no Salão do Leilão ${i + 1}/10`,
                description: `Manter a compostura absoluta diante de provocações de monstros sádicos e armadilhas sociais.`,
                attributeReq: 'Autocontrole',
                skillReq: 'Etiqueta',
                difficulty: 7,
                successText: `Você manteve a frieza impassível e manipulou os lances da rodada ${i + 1}.`,
                failureText: `A Besta interior rosnou e você quase perdeu o controle no salão.`
            }))
        },
        // 🧠 3. PILAR MENTAL
        {
            pilar: 'MENTAL',
            attrName: 'Percepção',
            skillName: 'Investigação',
            title: `Vigilância Tática dos Helipontos Privados (${zoneName})`,
            description: `Mapeamento dos voos de executivos e comboios aéreos da Inquisição em ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 2,
            durationMinutes: 1,
            actionsCount: 2,
            rewards: {
                money: 280,
                exp: 4,
                attributeTrained: 'Percepção',
                skillTrained: 'Investigação',
                equipmentDropName: 'Faca de Combate'
            },
            penalties: {
                hunger: 1
            },
            actions: [
                {
                    name: 'Escaneamento das Rotas de Voo',
                    description: 'Observar a aproximação de helicópteros com binóculos de visão noturna.',
                    attributeReq: 'Percepção',
                    skillReq: 'Investigação',
                    difficulty: 2,
                    successText: 'Você registrou os prefixos e horários exatos de pouso dos magnatas.',
                    failureText: 'A neblina densa atrapalhou a leitura dos prefixos.'
                },
                {
                    name: 'Identificação dos Passageiros VIP',
                    description: 'Reconhecer os rostos dos anciãos e carniçais que desembarcam.',
                    attributeReq: 'Percepção',
                    skillReq: 'Investigação',
                    difficulty: 2,
                    successText: 'Dossiê completo montado com fotos nítidas dos passageiros.',
                    failureText: 'Os passageiros usavam capuzes e guarda-chuvas que bloquearam a visão.'
                }
            ]
        },
        {
            pilar: 'MENTAL',
            attrName: 'Inteligência',
            skillName: 'Tecnologia',
            title: `Invasão ao Servidor Central da AlphaSecurity (${zoneName})`,
            description: `Guerra cibernética para quebrar criptografia quântica e apagar filmagens das câmeras de segurança de ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 6,
            durationMinutes: 5,
            actionsCount: 5,
            rewards: {
                money: 4800,
                exp: 14,
                attributeTrained: 'Inteligência',
                skillTrained: 'Tecnologia',
                equipmentDropName: 'Glock 18'
            },
            penalties: {
                healthDamageSuperficial: 2,
                stains: 1,
                hunger: 1
            },
            actions: [
                {
                    name: 'Quebra do Firewall Perimetral',
                    description: 'Injeção de malware no gateway de entrada da rede.',
                    attributeReq: 'Inteligência',
                    skillReq: 'Tecnologia',
                    difficulty: 6,
                    successText: 'Portas de acesso remoto escancaradas sem disparar alertas da equipe de TI.',
                    failureText: 'O antivírus corporativo detectou a assinatura do vírus e bloqueou o IP.'
                },
                {
                    name: 'Bypass na Autenticação Biométrica',
                    description: 'Emulação de tokens de segurança de administradores da rede.',
                    attributeReq: 'Inteligência',
                    skillReq: 'Tecnologia',
                    difficulty: 6,
                    successText: 'Acesso de superusuário concedido ao mainframe principal.',
                    failureText: 'O sistema exigiu dupla checagem biométrica física.'
                },
                {
                    name: 'Expurgo dos Logs de Vigilância Térmica',
                    description: 'Substituição das gravações de vídeo por loops estáticos falsos.',
                    attributeReq: 'Inteligência',
                    skillReq: 'Tecnologia',
                    difficulty: 6,
                    successText: 'Todas as gravações que mostravam atividades vampíricas foram deletadas.',
                    failureText: 'Backups redundantes em nuvem preservaram trechos do incidente.'
                },
                {
                    name: 'Extração das Listas de Contatos da Inquisição',
                    description: 'Download do banco de dados confidencial de caçadores locais.',
                    attributeReq: 'Inteligência',
                    skillReq: 'Investigação',
                    difficulty: 6,
                    successText: 'Arquivos ultrassecretos descriptografados com sucesso.',
                    failureText: 'Os arquivos estavam corrompidos com armadilhas lógicas.'
                },
                {
                    name: 'Autodestruição dos Registros de Invasão',
                    description: 'Limpeza de todos os vestígios digitais e queima do roteador remoto.',
                    attributeReq: 'Inteligência',
                    skillReq: 'Tecnologia',
                    difficulty: 6,
                    successText: 'O servidor sofreu sobrecarga física, parecendo um curto-circuito natural.',
                    failureText: 'A equipe de segurança cibernética isolou o ataque a tempo.'
                }
            ]
        },
        {
            pilar: 'MENTAL',
            attrName: 'Raciocínio',
            skillName: 'Ladroagem',
            title: `O Golpe Supremo: O Assalto à Fortaleza Subterrânea do Primogênito (${zoneName})`,
            description: `A Operação Lendária Definitiva: Uma incursão épica em 30 etapas pelas catacumbas blindadas mais impenetráveis de ${zoneName}.`,
            category: 'OPERATION',
            difficulty: 10,
            durationMinutes: 30,
            actionsCount: 30,
            rewards: {
                money: 35000,
                exp: 45,
                attributeTrained: 'Raciocínio',
                skillTrained: 'Ladroagem',
                equipmentDropName: 'Equipamento de Choque'
            },
            penalties: {
                healthDamageAggravated: 2,
                willpowerDamageAggravated: 2,
                stains: 3,
                hunger: 2
            },
            actions: Array.from({ length: 30 }).map((_, i) => ({
                name: `Assalto à Fortaleza Subterrânea - Fase ${i + 1}/30`,
                description: `Superação de enigmas mortais, sentinelas anciãs e armadilhas arcanas nas profundezas de ${zoneName}.`,
                attributeReq: 'Raciocínio',
                skillReq: 'Ladroagem',
                difficulty: 10,
                successText: `Com raciocínio tático brilhante, você superou a armadilha da Fase ${i + 1}.`,
                failureText: `Lâminas de prata e descargas elétricas atingiram você com violência extrema.`
            }))
        }
    ];
}
async function seedNineMatrixMissions() {
    try {
        await db_1.default.authenticate();
        console.log('Conectado ao banco de dados com sucesso.');
        // 1. Busca ou cria equipamentos se não existirem
        const equipmentList = [
            { name: 'Soco Inglês', description: 'Arma branca contundente para socos devastadores.', type: 'ARMA_BRANCA', damage: '+1', cost: 'R$ 150' },
            { name: 'Camisa Armadura', description: 'Tecido de aramida leve e discreto de Classe 2.', type: 'ARMADURA', armorLevel: 2, cost: 'R$ 2.000' },
            { name: 'Colete a Prova de Balas', description: 'Proteção balística tática pesada de Classe 3.', type: 'ARMADURA', armorLevel: 3, cost: 'R$ 6.500' },
            { name: 'SigSauer P226', description: 'Pistola semi-automática de alta precisão 9mm.', type: 'ARMA_FOGO', damage: '+2', range: 25, cost: 'R$ 3.800' },
            { name: 'Heckler & Koch MP-5', description: 'Submetralhadora 9mm lendária para operações táticas.', type: 'ARMA_FOGO', damage: '+3', range: 50, cost: 'R$ 12.000' },
            { name: 'Faca de Combate', description: 'Lâmina de aço carbono fosco para combate silencioso.', type: 'ARMA_BRANCA', damage: '+1', cost: 'R$ 300' },
            { name: 'Glock 18', description: 'Pistola automática com seletor de rajada.', type: 'ARMA_FOGO', damage: '+2', range: 20, cost: 'R$ 5.500' },
            { name: 'Equipamento de Choque', description: 'Armadura pesada de contenção tática de Classe 4.', type: 'ARMADURA', armorLevel: 4, cost: 'R$ 25.000' }
        ];
        for (const eq of equipmentList) {
            let existing = await models_1.DefinitionEquipment.findOne({ where: { name: eq.name } });
            if (!existing) {
                await models_1.DefinitionEquipment.create(eq);
                console.log(`🛡️ Equipamento cadastrado: ${eq.name}`);
            }
        }
        // 2. Busca todas as Zonas Principais (Level 2) e Bairros (Level 3)
        const zones = await models_1.DefinitionLocation.findAll({ where: { level: 2 } });
        console.log(`Encontradas ${zones.length} Zonas Principais de Nocturna.`);
        let totalCreated = 0;
        for (const zone of zones) {
            console.log(`\n📍 Gerando Matriz das 9 Missões para a ${zone.name}...`);
            const matrix = generateMatrixForZone(zone.name);
            // Também busca os bairros da zona para vincular missões a eles
            const districtChildren = await models_1.DefinitionLocation.findAll({ where: { parentId: zone.id } });
            for (let i = 0; i < matrix.length; i++) {
                const item = matrix[i];
                // Distribui as missões entre a Zona e os Bairros da Zona
                const assignedLocation = districtChildren[i % districtChildren.length] || zone;
                let mission = await models_1.DefinitionMissionIdle.findOne({
                    where: { title: item.title }
                });
                if (!mission) {
                    mission = await models_1.DefinitionMissionIdle.create({
                        locationId: assignedLocation.id,
                        title: item.title,
                        description: item.description,
                        category: item.category,
                        durationMinutes: item.durationMinutes,
                        baseDifficulty: item.difficulty,
                        rewardsJson: JSON.stringify(item.rewards),
                        penaltiesJson: JSON.stringify(item.penalties)
                    });
                    const createdMissionId = mission.id;
                    const actionsToCreate = item.actions.map((act, idx) => ({
                        missionId: createdMissionId,
                        stepOrder: idx + 1,
                        name: act.name,
                        description: act.description,
                        attributeReq: act.attributeReq,
                        skillReq: act.skillReq,
                        difficulty: act.difficulty,
                        successText: act.successText,
                        failureText: act.failureText
                    }));
                    await models_1.DefinitionMissionIdleAction.bulkCreate(actionsToCreate);
                    totalCreated++;
                    console.log(`  ✅ [Missão ${i + 1}/9] Criada: ${item.title} (${item.actionsCount} etapas) -> Vinculada a ${assignedLocation.name}`);
                }
                else {
                    console.log(`  ℹ️ Missão já existente: ${item.title}`);
                }
            }
        }
        console.log(`\n🎉 Matriz das 9 Missões por Pilares e Atributos inserida com sucesso! Total novas: ${totalCreated}`);
        process.exit(0);
    }
    catch (error) {
        console.error('Erro ao gerar matriz de missões:', error);
        process.exit(1);
    }
}
seedNineMatrixMissions();
