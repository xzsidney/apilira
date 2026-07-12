import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionClan, DefinitionClan } from '../src/models/DefinitionClan';
initDefinitionClan(sequelize);

const clansData = [
  {
    name: 'Brujah',
    description: 'Outrora reis-filósofos da antiga Cartago, os Brujah modernos são rebeldes, anarquistas e punks que lutam contra o sistema. Eles abraçam apaixonadamente suas causas e são conhecidos pelo temperamento explosivo e propensão à fúria.',
    sect: 'Camarilla',
    weakness: 'Os Brujah são criaturas de paixão feroz. A dificuldade para resistir ao frenesi é sempre aumentada em 2.',
    disciplines: 'Rapidez, Potência, Presença'
  },
  {
    name: 'Gangrel',
    description: 'Nômades e solitários, os Gangrel são o clã mais próximo de sua Besta interior. Eles rejeitam as intrigas das cidades e preferem os ermos selvagens. São excelentes sobreviventes e caçadores.',
    sect: 'Camarilla',
    weakness: 'Sempre que um Gangrel entra em frenesi, ele ganha uma característica animal (física ou mental) temporária. Após vários frenesis, essas características podem se tornar permanentes, afetando seus Atributos Sociais.',
    disciplines: 'Animalismo, Fortitude, Metamorfose'
  },
  {
    name: 'Malkaviano',
    description: 'O Clã da Lua é composto por oráculos e lunáticos. Todos os Malkavianos são irremediavelmente insanos, mas sua loucura frequentemente esconde uma sabedoria terrível e uma percepção única da realidade.',
    sect: 'Camarilla',
    weakness: 'Todo Malkaviano tem pelo menos uma perturbação mental incurável no momento do Abraço. Essa perturbação nunca pode ser superada com Força de Vontade.',
    disciplines: 'Auspícios, Demência, Rapidez' // Algumas edições usam Dominação/Ofuscação, mas a clássica é Auspícios, Demência e Ofuscação. Vou usar Auspícios, Demência e Ofuscação.
  },
  {
    name: 'Nosferatu',
    description: 'O sangue do Clã Nosferatu é amaldiçoado. O Abraço contorce o corpo do mortal em uma aberração monstruosa. Escondidos nos esgotos, os Nosferatu são os maiores espiões e corretores de informação do Mundo das Trevas.',
    sect: 'Camarilla',
    weakness: 'Aparência Monstruosa. O Atributo Aparência de um Nosferatu é zero e nunca pode ser aumentado. Eles falham automaticamente em todos os testes sociais que envolvem a primeira impressão.',
    disciplines: 'Animalismo, Ofuscação, Potência'
  },
  {
    name: 'Toreador',
    description: 'Os Toreador são o clã dos artistas, sedutores, socialites e hedonistas. Eles são fascinados pelo mundo mortal e se agarram apaixonadamente à sua humanidade perdida.',
    sect: 'Camarilla',
    weakness: 'Se um Toreador for confrontado com algo de extrema beleza (uma pintura, um nascer do sol, ou uma pessoa belíssima), ele deve testar Autocontrole ou ficará fascinado, incapaz de agir por minutos ou até horas.',
    disciplines: 'Auspícios, Rapidez, Presença'
  },
  {
    name: 'Tremere',
    description: 'Um clã de feiticeiros do sangue que usurpou a imortalidade na Idade Média. São organizados, herméticos, desconfiados e extremamente leais uns aos outros por conta de sua pirâmide hierárquica e magias de sangue.',
    sect: 'Camarilla',
    weakness: 'É mais fácil para um Tremere sofrer um Laço de Sangue. Apenas um gole do sangue de um vampiro já cria um vínculo nível 1, e todos os recém-criados são obrigados a beber do sangue do Conselho dos Sete.',
    disciplines: 'Auspícios, Dominação, Taumaturgia'
  },
  {
    name: 'Ventrue',
    description: 'Os reis, aristocratas e executivos da Camarilla. Os Ventrue são os governantes tradicionais da sociedade vampírica, abraçando magnatas de negócios, políticos e membros da alta sociedade.',
    sect: 'Camarilla',
    weakness: 'O paladar dos Ventrue é extremamente refinado. Eles só podem se alimentar de um tipo específico de sangue mortal (ex: apenas loiras, apenas clérigos, apenas pessoas ricas). Eles vomitam qualquer outro tipo de sangue.',
    disciplines: 'Dominação, Fortitude, Presença'
  },
  {
    name: 'Lasombra',
    description: 'Governantes sombrios do Sabá, os Lasombra são mestres da manipulação e das sombras. Ao contrário dos Ventrue, eles preferem puxar os cordões por trás dos bastidores com a ajuda do catolicismo e brutalidade darwinista.',
    sect: 'Sabá',
    weakness: 'Os Lasombra não possuem reflexo. Seja em espelhos, águas calmas, fotografias ou câmeras de segurança, a imagem do Lasombra não aparece.',
    disciplines: 'Dominação, Potência, Tenebrosidade'
  },
  {
    name: 'Tzimisce',
    description: 'Os Demônios são senhores feudais sádicos da Europa Oriental e o coração espiritual do Sabá. Eles são capazes de moldar a carne e os ossos como argila, tanto em si mesmos quanto em suas vítimas.',
    sect: 'Sabá',
    weakness: 'Um Tzimisce é territorial até a alma. Ele precisa descansar cercado por pelo menos dois punhados de terra de seu lugar de nascimento. Se não o fizer, sua parada de dados cai pela metade a cada noite.',
    disciplines: 'Animalismo, Auspícios, Vicissitude'
  },
  {
    name: 'Assamita',
    description: 'Uma seita mortífera de assassinos baseados no Oriente Médio (Alamut). Eles cobram pelo assassinato de outros Membros em litros de sangue vampírico (Vitae) para fortalecer o clã.',
    sect: 'Independente',
    weakness: 'No passado tinham uma maldição que os impedia de beber sangue de vampiro, mas a maldição moderna (V5/V20 revisada) ou a clássica vício em Vitae. Historicamente: Eles possuem um vício incontrolável pelo sangue de outros Membros.',
    disciplines: 'Rapidez, Ofuscação, Quietus'
  },
  {
    name: 'Seguidores de Set',
    description: 'Vampiros que adoram o deus egípcio sombrio Set. Eles se infiltram na sociedade mortal e imortal oferecendo drogas, vícios e desejos pervertidos para corromper a humanidade.',
    sect: 'Independente',
    weakness: 'Extrema vulnerabilidade à luz forte. Eles recebem o dobro de dano por exposição ao sol, e reduzem sua parada de dados em luzes muito brilhantes.',
    disciplines: 'Ofuscação, Presença, Serpentis'
  },
  {
    name: 'Giovanni',
    description: 'Uma família incestuosa de mercadores de Veneza e necromantes poderosos. Eles Abraçam quase que exclusivamente mortais da própria família mortal.',
    sect: 'Independente',
    weakness: 'O Beijo do Giovanni causa dor terrível em vez de prazer letárgico. Vítimas mortais do Beijo Giovanni sofrem dano adicional devido à agonia da mordida.',
    disciplines: 'Dominação, Necromancia, Potência'
  },
  {
    name: 'Ravnos',
    description: 'Trapaceiros, nômades e ilusionistas, os Ravnos são mestres da enganação. Eles viajam pelo mundo enganando tanto humanos quanto Membros, muitas vezes por pura diversão.',
    sect: 'Independente',
    weakness: 'Cada Ravnos tem uma compulsão criminosa específica (roubar, mentir, jogar, chantagear). Eles precisam testar Autocontrole para resistir ao impulso quando surge a oportunidade.',
    disciplines: 'Animalismo, Fortitude, Quimerismo'
  }
];

// Arrumando Malkaviano disciplinas para Auspícios, Demência, Ofuscação
clansData[2].disciplines = 'Auspícios, Demência, Ofuscação';

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionClan...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${clansData.length} Clãs de Vampiro...`);
    for (const clan of clansData) {
      await DefinitionClan.findOrCreate({
        where: { name: clan.name },
        defaults: clan as any
      });
    }

    console.log(`✅ Seed de Clãs finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
