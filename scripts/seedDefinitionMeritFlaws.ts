import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionMeritFlaw, DefinitionMeritFlaw } from '../src/models/DefinitionMeritFlaw';
initDefinitionMeritFlaw(sequelize);

const meritFlawsData = [
  // QUALIDADES
  { name: 'Ambidestro', description: 'O personagem possui grande habilidade com sua mão "ruim" e não sofre penalidades ao usar as duas mãos.', type: 'QUALIDADE', category: 'FISICO', cost: 1, gameStyle: 'TODOS' },
  { name: 'Sentidos Aguçados', description: 'O personagem possui audição, olfato ou visão naturalmente apurados, reduzindo a dificuldade em testes de percepção.', type: 'QUALIDADE', category: 'FISICO', cost: 1, gameStyle: 'TODOS' },
  { name: 'Ingerir Comida', description: 'Permite que um vampiro engula comida humana normalmente, vomitando-a mais tarde em segredo. Ótimo para manter a Máscara.', type: 'QUALIDADE', category: 'FISICO', cost: 1, gameStyle: 'VAMPIRE' },
  { name: 'Sono Leve', description: 'Você acorda a qualquer sinal de perigo. Não sofre dificuldades por estar dormindo ou entorpecido ao ser atacado de surpresa.', type: 'QUALIDADE', category: 'MENTAL', cost: 2, gameStyle: 'TODOS' },
  { name: 'Senso de Perigo', description: 'Você tem um sexto sentido que avisa quando o perigo está próximo.', type: 'QUALIDADE', category: 'MENTAL', cost: 3, gameStyle: 'TODOS' },
  { name: 'Bom Senso', description: 'Você possui uma dose gigantesca de sabedoria prática. O Narrador pode alertá-lo quando estiver prestes a fazer algo muito estúpido.', type: 'QUALIDADE', category: 'MENTAL', cost: 1, gameStyle: 'TODOS' },
  { name: 'Encantador de Multidões', description: 'Você sabe como falar com grupos e a sua voz instila respeito ou adoração nas massas.', type: 'QUALIDADE', category: 'SOCIAL', cost: 2, gameStyle: 'TODOS' },
  { name: 'Médium', description: 'Você consegue ver, ouvir e se comunicar com espíritos dos mortos ao seu redor.', type: 'QUALIDADE', category: 'SOBRENATURAL', cost: 2, gameStyle: 'TODOS' },
  { name: 'Sorte', description: 'Você nasceu com a bunda virada para a lua. Você pode repetir testes fracassados algumas vezes por crônica.', type: 'QUALIDADE', category: 'SOBRENATURAL', cost: 3, gameStyle: 'TODOS' },
  { name: 'Resistência à Magia', description: 'Você tem uma resistência inata contra magias, feitiços e Taumaturgia.', type: 'QUALIDADE', category: 'SOBRENATURAL', cost: 2, gameStyle: 'TODOS' },

  // DEFEITOS
  { name: 'Sono Pesado', description: 'Você tem extrema dificuldade de acordar. Se for emboscado dormindo, sofre grandes penalidades nos turnos iniciais.', type: 'DEFEITO', category: 'MENTAL', cost: -1, gameStyle: 'TODOS' },
  { name: 'Visão Ruim', description: 'Você precisa de óculos. Perder os óculos em combate traz severas penalidades.', type: 'DEFEITO', category: 'FISICO', cost: -2, gameStyle: 'TODOS' },
  { name: 'Aleijado', description: 'Você tem pernas permanentemente machucadas ou amputadas, precisando de cadeira de rodas ou muletas.', type: 'DEFEITO', category: 'FISICO', cost: -3, gameStyle: 'TODOS' },
  { name: 'Fobia', description: 'Você tem um medo paralisante de algo (ex: aranhas, multidões, altura). O contato forçado causa perda de controle ou fuga.', type: 'DEFEITO', category: 'MENTAL', cost: -2, gameStyle: 'TODOS' },
  { name: 'Pesadelos', description: 'Você tem pesadelos horríveis frequentemente, perdendo dados em testes devido ao cansaço e falta de sono.', type: 'DEFEITO', category: 'MENTAL', cost: -1, gameStyle: 'TODOS' },
  { name: 'Inimigo', description: 'Alguém poderoso e perigoso ativamente quer destruir a sua vida.', type: 'DEFEITO', category: 'SOCIAL', cost: -2, gameStyle: 'TODOS' },
  { name: 'Segredo Obscuro', description: 'Você possui um segredo que, se revelado, o destruiria na sociedade local (ou resultaria em Morte Final).', type: 'DEFEITO', category: 'SOCIAL', cost: -1, gameStyle: 'TODOS' },
  { name: 'Assombrado', description: 'Um fantasma zangado o segue por toda parte e gosta de causar problemas nos piores momentos possíveis.', type: 'DEFEITO', category: 'SOBRENATURAL', cost: -3, gameStyle: 'TODOS' },
  { name: 'Amaldiçoado', description: 'Você possui uma maldição mágica específica (ex: objetos de prata queimam você, cães latem na sua presença).', type: 'DEFEITO', category: 'SOBRENATURAL', cost: -2, gameStyle: 'TODOS' },
  { name: 'Estômago Fraco', description: 'Vampiros não conseguem segurar sangue fraco ou estragado, vomitando instantaneamente.', type: 'DEFEITO', category: 'FISICO', cost: -2, gameStyle: 'VAMPIRE' },
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionMeritFlaw...');
    await sequelize.sync({ alter: true });

    console.log('Populando Qualidades e Defeitos...');
    for (const mf of meritFlawsData) {
      await DefinitionMeritFlaw.findOrCreate({
        where: { name: mf.name },
        defaults: mf as any
      });
    }

    console.log(`✅ Seed de ${meritFlawsData.length} Qualidades e Defeitos finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
