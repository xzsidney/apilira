import { sequelize } from '../src/models';
import { CharacterVampire } from '../src/models/CharacterVampire';
import { DefinitionClan } from '../src/models/DefinitionClan';
import { User } from '../src/models/User';

const CHARACTERS = [
  {
    nome: "André de Albuquerque Maranhão",
    cla: "Ventrue",
    historico: "André é o típico exemplar de homem de sucesso. Ele começou do zero... construiu uma tremenda fortuna e adquiriu uma grande influência no setor de construção de São Paulo.",
    conceito: "Profissional",
    ambition: "Expandir seus domínios comerciais em Curitiba", // Adaptado de Natureza/Comportamento
    desire: "Manter a ordem e a Máscara"
  },
  {
    nome: "Antônio Canellas",
    cla: "Gangrel",
    historico: "Antônio não é um Gangrel típico, ele é um habitante da selva de pedra. Amante da civilização, ele nunca teve as inclinações selvagens que se espera de um Nômade.",
    conceito: "Malandro",
    ambition: "Proteger seu estacionamento vertical",
    desire: "Viver no conforto da civilização"
  },
  {
    nome: "Aristeu Nogueira",
    cla: "Toreador",
    historico: "A vida nunca foi difícil para Aristeu, pois ele nasceu dotado de beleza... Em um impulso de momento, Aristeu foi abraçado.",
    conceito: "Artista",
    ambition: "Evitar a ira do Príncipe",
    desire: "Aproveitar os prazeres sem consequências"
  },
  {
    nome: "Benedito Meia-Légua",
    cla: "Nosferatu",
    historico: "Benedito era um simples investigador da polícia... Após provar seu valor como investigador, ele acabou sendo abraçado.",
    conceito: "Investigador",
    ambition: "Descobrir os maiores segredos de Nocturna",
    desire: "Sobreviver nas sombras"
  },
  {
    nome: "Daniel Gomes de Freitas",
    cla: "Brujah",
    historico: "Daniel era um defensor das minorias em seu tempo de estudante... Seu senhor era um infiltrado europeu.",
    conceito: "Estudante",
    ambition: "Lutar contra o sistema do Principado",
    desire: "Defender seus ideais rebeldes"
  },
  {
    nome: "Djalma Dutra",
    cla: "Toreador",
    historico: "Djalma não parece uma Toreador típica, e não é. Desordeira, criminosa, violenta, esquentada...",
    conceito: "Motoqueira",
    ambition: "Provar que não é uma peça descartável",
    desire: "Sobreviver às noites com seus próprios punhos"
  },
  {
    nome: "Dulce Maia",
    cla: "Ventrue",
    historico: "Dulce é uma personificação da ambição. Escolhida por uma Ventrue devido a sua beleza...",
    conceito: "Acompanhante",
    ambition: "Acumular influência secreta",
    desire: "Ser subestimada pelos conservadores"
  },
  {
    nome: "Elisa Kauffmann Abramovich",
    cla: "Tremere",
    historico: "A história de Elisa é considerada comum para as mulheres nascidas no começo do século passado... Hoje Elisa é a Mão Esquerda.",
    conceito: "Assassina",
    ambition: "Manter a tradição e a ordem Tremere",
    desire: "Eliminar alvos que ameaçam o Clã"
  },
  {
    nome: "Luísa Mahin",
    cla: "Brujah",
    historico: "Luísa sempre teve a atitude errada na hora errada. Primogênita nascida em família rica... Deserdada ao agredir seu noivo.",
    conceito: "Diletante",
    ambition: "Viver cada noite como se fosse a última",
    desire: "Independência total"
  },
  {
    nome: "Nuta James",
    cla: "Nosferatu",
    historico: "Nuta tinha uma vida de prazeres e sucesso... Sua beleza era tida como uma das mais desejáveis de Curitiba, até ser arruinada e abraçada na sarjeta.",
    conceito: "Acompanhante",
    ambition: "Destruir canalhas em Nocturna",
    desire: "Vingar-se de quem se aproveita dos outros"
  },
  {
    nome: "Pajeú",
    cla: "Gangrel",
    historico: "A Gangrel conhecida como Pajeú não tem a mais complexa das histórias... Ela lutou contra lobisomens e venceu um com um facão.",
    conceito: "Caçadora",
    ambition: "Provar ser a predadora alfa",
    desire: "Destruir a fraqueza"
  },
  {
    nome: "Rafael Mourão",
    cla: "Brujah",
    historico: "Rafael Mourão era estudante de direito nos anos 70... Envolvido com movimentos clandestinos durante a ditadura.",
    conceito: "Estudante",
    ambition: "Mudar o sistema por dentro",
    desire: "Lutar pelas suas convicções"
  },
  {
    nome: "Severo Fournier",
    cla: "Tremere",
    historico: "Severo tinha tudo: uma bela esposa, filhos obedientes... Aquele pergaminho continha um fragmento do Livro de Nod, e ele foi abraçado.",
    conceito: "Professor",
    ambition: "Se vingar do próprio Clã um dia",
    desire: "Acumular conhecimento proibido"
  }
];

async function seedNpcs() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida.');

    // Sincroniza a tabela com o novo schema (isNpc e userId nulo)
    await CharacterVampire.sync({ alter: true });
    console.log('Tabela CharacterVampire atualizada (alter: true).');

    const [systemUser] = await User.findOrCreate({
      where: { email: 'system@liragames.com.br' },
      defaults: {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'System_NPC',
        password: 'NoLogin123!@',
        role: 'admin'
      }
    });

    for (const char of CHARACTERS) {
      const clan = await DefinitionClan.findOne({ where: { name: char.cla } });
      
      if (!clan) {
        console.warn(`[Aviso] Clã ${char.cla} não encontrado. Pulando NPC ${char.nome}.`);
        continue;
      }

      const [npc, created] = await CharacterVampire.findOrCreate({
        where: { name: char.nome, isNpc: true },
        defaults: {
          userId: systemUser.id,
          isNpc: true,
          clanId: clan.id,
          name: char.nome,
          concept: char.conceito,
          ambition: char.ambition,
          desire: char.desire,
          history: char.historico,
          generation: 9, // O USUÁRIO PEDIU TODOS GERAÇÃO 9
          hunger: 1,
          humanity: 6,
          healthMax: 6,
          willpowerMax: 6
        }
      });

      if (created) {
        console.log(`NPC Criado: ${npc.name} (Geração 9, Clã: ${char.cla})`);
      } else {
        await npc.update({
          clanId: clan.id,
          concept: char.conceito,
          ambition: char.ambition,
          desire: char.desire,
          history: char.historico,
          generation: 9
        });
        console.log(`NPC Atualizado: ${npc.name}`);
      }
    }

    console.log('✅ Todos os NPCs Sires foram semeados com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao semear NPCs:', error);
    process.exit(1);
  }
}

seedNpcs();
