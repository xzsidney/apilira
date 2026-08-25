"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const models_1 = require("./models");
function getDistrictLore(bairro) {
    const name = bairro.name;
    let attrs = bairro.attributes || {};
    if (typeof attrs === 'string') {
        try {
            attrs = JSON.parse(attrs);
        }
        catch (e) { }
    }
    const faccao = (attrs.dominio_faccao || '').toLowerCase();
    const riqueza = (attrs.riqueza || 'Média').toLowerCase();
    let huntTitle = `Caçada Noturna: Sombras de ${name}`;
    let huntDesc = `Alimentação estratégica nas ruelas e pontos de circulação de ${name}.`;
    let huntAttr = 'Carisma';
    let huntSkill = 'Persuasão';
    let huntSuccessText = `Você seduziu um transeunte desprevenido em ${name} e saciou sua sede sem quebrar a Máscara.`;
    let huntFailureText = `A presa percebeu sua palidez mortal e fugiu gritando para uma avenida iluminada.`;
    if (riqueza.includes('alta') || riqueza.includes('altíssima')) {
        huntTitle = `Banquete da Elite: ${name}`;
        huntDesc = `Caçada seletiva em lounges privativos, coberturas de luxo e bistrôs elegantes de ${name}.`;
        huntAttr = 'Manipulação';
        huntSkill = 'Manha';
        huntSuccessText = `Você se infiltrou em uma festa VIP de ${name}, isolou um mortal influente e bebeu sangue refinado.`;
        huntFailureText = `Seguranças particulares e câmeras térmicas barraram sua entrada na área nobre.`;
    }
    else if (name.includes('Luz') || name.includes('Brás') || name.includes('Sé') || name.includes('República')) {
        huntTitle = `Sangue Urbano: Madrugada de ${name}`;
        huntDesc = `Alimentação rápida entre os becos escuros, marquises e estações desertas de ${name}.`;
        huntAttr = 'Destreza';
        huntSkill = 'Furtividade';
        huntSuccessText = `Você encurralou um solitário nas vielas de ${name}, alimentou-se nas sombras e limpou os vestígios.`;
        huntFailureText = `Uma viatura policial acionou a sirene próxima, forçando um recuo apressado.`;
    }
    let opTitle = `Incursão Tática: ${name}`;
    let opDesc = `Operação de vigilância, sabotagem e coleta de favores no território de ${name}.`;
    let op1 = {
        name: 'Reconhecimento Periférico',
        desc: `Infiltração nas rotas de vigília do setor de ${name}.`,
        attr: 'Raciocínio',
        skill: 'Investigação',
        diff: 6,
        success: `Você identificou os pontos cegos dos vigias e as linhas de fuga seguras em ${name}.`,
        fail: `Drones e patrulhas forçaram você a se esconder em um telhado vulnerável.`
    };
    let op2 = {
        name: 'Extração de Segredos',
        desc: `Abordagem de informantes no submundo de ${name}.`,
        attr: 'Manipulação',
        skill: 'Intimidação',
        diff: 7,
        success: `Um informante lacaio entregou os registros de movimentação das facções locais.`,
        fail: `O contato desconfiou de suas intenções e acionou o alarme silencioso.`
    };
    let op3 = {
        name: 'Retirada das Sombras',
        desc: `Fuga limpa sem deixar rastros térmicos ou testemunhas em ${name}.`,
        attr: 'Destreza',
        skill: 'Furtividade',
        diff: 6,
        success: `Você deixou o setor de ${name} sem levantar qualquer suspeita entre os carniçais locais.`,
        fail: `Um cão de guarda farejou o odor de vitae morta, forçando uma fuga atabalhoada.`
    };
    if (faccao.includes('sabá') || faccao.includes('anarquista')) {
        opTitle = `Contenção de Heresia: ${name}`;
        opDesc = `Neutralização de células rebeldes e expurgo de pistas proibidas nas fronteiras de ${name}.`;
        op1.name = 'Infiltração no Ponto de Encontro';
        op1.desc = `Aproximação silenciosa do esconderijo dos rebeldes em ${name}.`;
        op1.attr = 'Destreza';
        op1.skill = 'Furtividade';
        op2.name = 'Confronto nas Sombras';
        op2.desc = `Combate corpo a corpo para neutralizar os insurgentes.`;
        op2.attr = 'Força';
        op2.skill = 'Briga';
        op2.diff = 8;
        op2.success = `Você subjugou os lacaios rebeldes antes que pudessem disparar suas armas.`;
        op2.fail = `Os insurgentes estavam armados com sinalizadores de magnésio e abriram fogo.`;
    }
    return {
        huntTitle,
        huntDesc,
        huntAttr,
        huntSkill,
        huntSuccessText,
        huntFailureText,
        opTitle,
        opDesc,
        opAction1: op1,
        opAction2: op2,
        opAction3: op3
    };
}
async function seedAllDistrictMissions() {
    try {
        await db_1.default.authenticate();
        console.log('Conectado ao banco de dados com sucesso.');
        const districts = await models_1.DefinitionLocation.findAll({ where: { level: 3 } });
        console.log(`Encontrados ${districts.length} distritos (Bairros Level 3) em Nocturna.`);
        let createdMissionsCount = 0;
        for (const district of districts) {
            const lore = getDistrictLore(district);
            // 1. MISSÃO DE CAÇADA (HUNT)
            let huntMission = await models_1.DefinitionMissionIdle.findOne({
                where: { locationId: district.id, category: 'HUNT' }
            });
            if (!huntMission) {
                huntMission = await models_1.DefinitionMissionIdle.create({
                    locationId: district.id,
                    title: lore.huntTitle,
                    description: lore.huntDesc,
                    category: 'HUNT',
                    durationMinutes: 3,
                    baseDifficulty: 6,
                    rewardsJson: JSON.stringify({ hunger: -1, exp: 2 }),
                    penaltiesJson: JSON.stringify({ hunger: 1, stains: 1 })
                });
                await models_1.DefinitionMissionIdleAction.create({
                    missionId: huntMission.id,
                    stepOrder: 1,
                    name: 'Abordagem da Presa',
                    description: lore.huntDesc,
                    attributeReq: lore.huntAttr,
                    skillReq: lore.huntSkill,
                    difficulty: 6,
                    successText: lore.huntSuccessText,
                    failureText: lore.huntFailureText
                });
                createdMissionsCount++;
            }
            // 2. MISSÃO TÁTICA DA FACÇÃO (OPERATION)
            let opMission = await models_1.DefinitionMissionIdle.findOne({
                where: { locationId: district.id, category: 'OPERATION' }
            });
            if (!opMission) {
                opMission = await models_1.DefinitionMissionIdle.create({
                    locationId: district.id,
                    title: lore.opTitle,
                    description: lore.opDesc,
                    category: 'OPERATION',
                    durationMinutes: 5,
                    baseDifficulty: 7,
                    rewardsJson: JSON.stringify({ money: 350, exp: 5 }),
                    penaltiesJson: JSON.stringify({ healthDamageSuperficial: 2, hunger: 1 })
                });
                await models_1.DefinitionMissionIdleAction.bulkCreate([
                    {
                        missionId: opMission.id,
                        stepOrder: 1,
                        name: lore.opAction1.name,
                        description: lore.opAction1.desc,
                        attributeReq: lore.opAction1.attr,
                        skillReq: lore.opAction1.skill,
                        difficulty: lore.opAction1.diff,
                        successText: lore.opAction1.success,
                        failureText: lore.opAction1.fail
                    },
                    {
                        missionId: opMission.id,
                        stepOrder: 2,
                        name: lore.opAction2.name,
                        description: lore.opAction2.desc,
                        attributeReq: lore.opAction2.attr,
                        skillReq: lore.opAction2.skill,
                        difficulty: lore.opAction2.diff,
                        successText: lore.opAction2.success,
                        failureText: lore.opAction2.fail
                    },
                    {
                        missionId: opMission.id,
                        stepOrder: 3,
                        name: lore.opAction3.name,
                        description: lore.opAction3.desc,
                        attributeReq: lore.opAction3.attr,
                        skillReq: lore.opAction3.skill,
                        difficulty: lore.opAction3.diff,
                        successText: lore.opAction3.success,
                        failureText: lore.opAction3.fail
                    }
                ]);
                createdMissionsCount++;
            }
        }
        console.log(`✅ Missões e Caçadas criadas/atualizadas com sucesso! Total de novas missões: ${createdMissionsCount}`);
        // SEED DE GRANDES CRÔNICAS NARRATIVAS DO LIVRO-JOGO SOLO
        const existingStoryCount = await models_1.DefinitionStoryAdventure.count();
        if (existingStoryCount <= 1) {
            console.log('Criando Crônicas Narrativas do Livro-Jogo Solo...');
            // Crônica 1: Conspiração no Centro Histórico (Sé / República)
            const adv1 = await models_1.DefinitionStoryAdventure.create({
                title: 'O Conclave das Sombras: Centro Histórico',
                description: 'Uma mensagem criptografada do Príncipe convoca os membros influentes para uma reunião de emergência sob a Catedral da Sé. Traições e sangue antigo aguardam nas catacumbas.'
            });
            const n1_1 = await models_1.DefinitionStoryNode.create({
                adventureId: adv1.id,
                narrativeText: 'A chuva ácida de Nocturna banha os vitrais escuros da Praça da Sé. Um cariçal bem vestido aguarda em um sedã preto com o motor ligado. Ele faz sinal para você entrar.',
                isEnding: false,
                speakerName: 'Lacaio do Príncipe',
                backgroundImageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop'
            });
            adv1.firstNodeId = n1_1.id;
            await adv1.save();
            const n1_success = await models_1.DefinitionStoryNode.create({
                adventureId: adv1.id,
                narrativeText: 'Você descobre os planos do traidor antes que a emboscada seja armada. O Príncipe agradece seus serviços concedendo prestígio e proteção no Eliseu.',
                isEnding: true,
                speakerName: 'O Príncipe de Nocturna',
                backgroundImageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1920&auto=format&fit=crop'
            });
            const n1_fail = await models_1.DefinitionStoryNode.create({
                adventureId: adv1.id,
                narrativeText: 'A armadilha é acionada! Tiros de escopeta com balas de prata ecoam nos túneis. Você escapa por pouco através dos canos de esgoto, ferido e caçado.',
                isEnding: true,
                speakerName: 'Inquisição',
                backgroundImageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1920&auto=format&fit=crop'
            });
            await models_1.DefinitionStoryChoice.create({
                nodeId: n1_1.id,
                choiceText: '[INVESTIGAÇÃO] Avaliar os sinais e o carceller com Raciocínio + Intuição',
                attributeReq: 'Raciocínio',
                skillReq: 'Investigação',
                difficulty: 7,
                successNodeId: n1_success.id,
                failureNodeId: n1_fail.id,
                customStyle: 'DISCIPLINE'
            });
            // Crônica 2: Sangue & Neon na Zona Oeste (Pinheiros / Vila Madalena)
            const adv2 = await models_1.DefinitionStoryAdventure.create({
                title: 'Frequência Vermelha: A Boate dos Toreador',
                description: 'Um novo clube noturno na Vila Madalena está distribuindo uma droga sintética com traços de sangue vampírico, ameaçando romper a Máscara perante as redes sociais.'
            });
            const n2_1 = await models_1.DefinitionStoryNode.create({
                adventureId: adv2.id,
                narrativeText: 'O som estridente de sintetizadores e as luzes estroboscópicas envolvem centenas de jovens mortais dançando. No mezanino VIP, um vampiro Toreador sorri com uma taça de cristal preenchida com um líquido carmesim espesso.',
                isEnding: false,
                speakerName: 'DJ Carmilla',
                backgroundImageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop'
            });
            adv2.firstNodeId = n2_1.id;
            await adv2.save();
            const n2_success = await models_1.DefinitionStoryNode.create({
                adventureId: adv2.id,
                narrativeText: 'Com charme hipnótico e presença avassaladora, você confisca os frascos da droga e força o Toreador a fechar o laboratório sem deixar testemunhas.',
                isEnding: true,
                speakerName: 'Narrador',
                backgroundImageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1920&auto=format&fit=crop'
            });
            const n2_fail = await models_1.DefinitionStoryNode.create({
                adventureId: adv2.id,
                narrativeText: 'Seguranças dopados com vitae atacam você em meio à pista de dança! Mortais filmam a confusão com celulares antes de você conseguir quebrar as luzes e fugir.',
                isEnding: true,
                speakerName: 'Narrador',
                backgroundImageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop'
            });
            await models_1.DefinitionStoryChoice.create({
                nodeId: n2_1.id,
                choiceText: '[PRESENÇA] Subjugar o Toreador e a multidão com Carisma + Persuasão',
                attributeReq: 'Carisma',
                skillReq: 'Persuasão',
                difficulty: 7,
                successNodeId: n2_success.id,
                failureNodeId: n2_fail.id,
                customStyle: 'DISCIPLINE'
            });
            console.log('🎉 Crônicas Narrativas adicionais criadas!');
        }
        console.log('🏁 Processo de criação de aventuras e missões concluído com sucesso total!');
        process.exit(0);
    }
    catch (error) {
        console.error('Erro ao popular aventuras:', error);
        process.exit(1);
    }
}
seedAllDistrictMissions();
