import sequelize from './config/db';
import { 
  DefinitionLocation, 
  DefinitionMissionIdle, 
  DefinitionMissionIdleAction,
  DefinitionEquipment
} from './models';

interface MatrixMissionTemplate {
  pilar: 'FÍSICO' | 'SOCIAL' | 'MENTAL';
  attrName: string;
  skillName: string;
  title: string;
  description: string;
  category: 'OPERATION' | 'HUNT';
  difficulty: number;
  durationMinutes: number;
  actionsCount: number;
  rewards: {
    money?: number;
    exp?: number;
    hunger?: number;
    attributeTrained?: string;
    skillTrained?: string;
    equipmentDropName?: string;
  };
  penalties: {
    healthDamageSuperficial?: number;
    healthDamageAggravated?: number;
    willpowerDamageAggravated?: number;
    stains?: number;
    hunger?: number;
  };
  actions: Array<{
    name: string;
    description: string;
    attributeReq: string;
    skillReq: string;
    difficulty: number;
    successText: string;
    failureText: string;
  }>;
}

function generateMatrixForDistrict(districtName: string): MatrixMissionTemplate[] {
  return [
    // 💪 1. PILAR FÍSICO
    {
      pilar: 'FÍSICO',
      attrName: 'Força',
      skillName: 'Briga',
      title: `Demolição Silenciosa do Depósito Ventrue (${districtName})`,
      description: `Incursão de força bruta para destruir a cadeia de suprimentos e os contêineres blindados da Camarilla em ${districtName}.`,
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
          description: `Forçar as travas hidráulicas da entrada secundária do galpão em ${districtName}.`,
          attributeReq: 'Força',
          skillReq: 'Briga',
          difficulty: 4,
          successText: `Com força sobrenatural, você entortou as trancas de aço em ${districtName} sem disparar os sensores sísmicos.`,
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
          successText: `Os paletes foram totalmente destruídos, arruinando a logística rival em ${districtName}.`,
          failureText: 'Você precisou bater em retirada antes de completar a demolição total.'
        }
      ]
    },
    {
      pilar: 'FÍSICO',
      attrName: 'Destreza',
      skillName: 'Ladroagem',
      title: `Infiltração no Cofre do Magnata Ventrue (${districtName})`,
      description: `Invasão acrobática através de dutos e sensores a laser para violar o cofre de títulos imobiliários em ${districtName}.`,
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
          description: `Acrobacias no poço do elevador desligado do edifício em ${districtName}.`,
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
          description: `Fuga pelo heliponto nas sombras da madrugada em ${districtName}.`,
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
      title: `Emboscada na Rota dos Blindados da AlphaSecurity (${districtName})`,
      description: `Confronto armado de alta intensidade para interceptar o comboio blindado transportando armas pesadas em ${districtName}.`,
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
        name: `Confronto Blindado em ${districtName} • Etapa ${i + 1}/10`,
        description: `Troca de tiros e resistência a estilhaços e chumbo grosso contra os agentes da AlphaSecurity no setor de ${districtName}.`,
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
      title: `Caçada no Coquetel da Embaixada (${districtName})`,
      description: `Alimentação sutil e elegante entre diplomatas, magnatas e celebridades em ${districtName}.`,
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
          description: `Envolver uma presa refinada em uma conversa magnética em ${districtName}.`,
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
          successText: `O êxtase do Beijo envolveu o mortal em ${districtName}, permitindo uma alimentação farta e sem alarde.`,
          failureText: 'O mortal sentiu uma tontura brusca e derrubou uma taça no chão.'
        }
      ]
    },
    {
      pilar: 'SOCIAL',
      attrName: 'Manipulação',
      skillName: 'Subterfúgio',
      title: `Chantagem contra o Executivo do Fundo Blindado (${districtName})`,
      description: `Operação de coerção psicológica e chantagem corporativa para submeter um magnata mortal em ${districtName}.`,
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
          description: `Mostrar provas irrefutáveis de fraudes fiscais e traições em ${districtName}.`,
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
          successText: `Os fundos de ${districtName} foram depositados instantaneamente em sua conta oculta.`,
          failureText: 'O banco bloqueou a transferência preliminar por suspeita de fraude.'
        }
      ]
    },
    {
      pilar: 'SOCIAL',
      attrName: 'Autocontrole',
      skillName: 'Etiqueta',
      title: `A Sabotagem do Leilão de Sangue Secreto (${districtName})`,
      description: `Infiltração de sangue-frio em um leilão clandestino de relíquias e cativos do Sabá em ${districtName}.`,
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
        name: `Tensão no Leilão de ${districtName} • Etapa ${i + 1}/10`,
        description: `Manter a compostura absoluta diante de provocações de monstros sádicos e armadilhas sociais em ${districtName}.`,
        attributeReq: 'Autocontrole',
        skillReq: 'Etiqueta',
        difficulty: 7,
        successText: `Você manteve a frieza impassível e manipulou os lances da rodada ${i + 1}.`,
        failureText: `A Besta interior rosnou e você quase perdeu o controle no salão de ${districtName}.`
      }))
    },

    // 🧠 3. PILAR MENTAL
    {
      pilar: 'MENTAL',
      attrName: 'Percepção',
      skillName: 'Investigação',
      title: `Vigilância Tática dos Helipontos Privados (${districtName})`,
      description: `Mapeamento dos voos de executivos e comboios aéreos da Inquisição em ${districtName}.`,
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
          description: `Observar a aproximação de helicópteros nos helipontos de ${districtName}.`,
          attributeReq: 'Percepção',
          skillReq: 'Investigação',
          difficulty: 2,
          successText: `Você registrou os prefixos e horários exatos de pouso dos magnatas em ${districtName}.`,
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
      title: `Invasão ao Servidor Central da AlphaSecurity (${districtName})`,
      description: `Guerra cibernética para quebrar criptografia quântica e apagar filmagens das câmeras de segurança de ${districtName}.`,
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
          description: `Injeção de malware no gateway de entrada da rede em ${districtName}.`,
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
          description: `Substituição das gravações de vídeo das câmeras de ${districtName}.`,
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
      title: `O Golpe Supremo: O Assalto à Fortaleza Subterrânea do Primogênito (${districtName})`,
      description: `A Operação Lendária Definitiva: Uma incursão épica em 30 etapas pelas catacumbas blindadas mais impenetráveis de ${districtName}.`,
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
        name: `Assalto à Fortaleza de ${districtName} • Fase ${i + 1}/30`,
        description: `Superação de enigmas mortais, sentinelas anciãs e armadilhas arcanas nas profundezas de ${districtName}.`,
        attributeReq: 'Raciocínio',
        skillReq: 'Ladroagem',
        difficulty: 10,
        successText: `Com raciocínio tático brilhante, você superou a armadilha da Fase ${i + 1} em ${districtName}.`,
        failureText: `Lâminas de prata e descargas elétricas atingiram você com violência extrema em ${districtName}.`
      }))
    }
  ];
}

async function seedNineMatrixAllDistricts() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');

    // 1. Busca todos os 48 distritos / bairros (Level 3)
    const districts = await DefinitionLocation.findAll({ where: { level: 3 } });
    console.log(`Encontrados ${districts.length} Distritos de Nocturna para geração completa.`);

    let totalCreated = 0;

    for (let d = 0; d < districts.length; d++) {
      const district = districts[d];
      console.log(`\n[${d + 1}/${districts.length}] 📍 Gerando Pacote de 9 Missões para: ${district.name}...`);
      
      const matrix = generateMatrixForDistrict(district.name);

      for (let i = 0; i < matrix.length; i++) {
        const item = matrix[i];

        let mission = await DefinitionMissionIdle.findOne({
          where: { locationId: district.id, title: item.title }
        });

        if (!mission) {
          mission = await DefinitionMissionIdle.create({
            locationId: district.id,
            title: item.title,
            description: item.description,
            category: item.category,
            durationMinutes: item.durationMinutes,
            baseDifficulty: item.difficulty,
            rewardsJson: JSON.stringify(item.rewards),
            penaltiesJson: JSON.stringify(item.penalties)
          } as any);

          const createdMissionId = (mission as any).id;
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

          await DefinitionMissionIdleAction.bulkCreate(actionsToCreate as any);
          totalCreated++;
        }
      }
      console.log(`  ✅ 9 Missões geradas com sucesso para ${district.name}!`);
    }

    console.log(`\n🏁 SUCESSO TOTAL! Foram geradas ${totalCreated} missões completas com a Matriz dos 9 Atributos para todos os 48 distritos de Nocturna!`);
    process.exit(0);
  } catch (error) {
    console.error('Erro ao gerar matriz de missões para todos os distritos:', error);
    process.exit(1);
  }
}

seedNineMatrixAllDistricts();
