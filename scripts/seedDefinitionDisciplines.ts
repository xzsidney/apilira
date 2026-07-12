import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionDiscipline, DefinitionDiscipline } from '../src/models/DefinitionDiscipline';
import { initDefinitionDisciplinePower, DefinitionDisciplinePower } from '../src/models/DefinitionDisciplinePower';

initDefinitionDiscipline(sequelize);
initDefinitionDisciplinePower(sequelize);

// Estabelecendo relacionamentos para o Seed
DefinitionDiscipline.hasMany(DefinitionDisciplinePower, { foreignKey: 'definitionDisciplineId' });
DefinitionDisciplinePower.belongsTo(DefinitionDiscipline, { foreignKey: 'definitionDisciplineId' });

const disciplinesData = [
  {
    name: 'Auspícios',
    description: 'A disciplina da percepção sobrenatural, premonição e telepatia. Permite aos vampiros ver além do véu da realidade.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Sentidos Aguçados', level: 1, description: 'Aguça todos os sentidos do vampiro.', costType: 'Livre', costAmount: 0, duration: 'Uma Cena', dicePool: 'Raciocínio + Determinação', systemNotes: 'Passivo ou pode ser mantido por uma cena.' },
      { name: 'Sentir o Invisível', level: 1, description: 'Detecta presenças sobrenaturais escondidas.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: 'Raciocínio + Auspícios', systemNotes: 'Dificuldade varia de acordo com a ofuscação do alvo.' },
      { name: 'Premonição', level: 2, description: 'Pressentimentos e flashes repentinos sobre perigo iminente.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Instantâneo', dicePool: 'Determinação + Auspícios', systemNotes: 'Ativa automaticamente diante de perigo ou por vontade.' },
      { name: 'Sondar a Alma', level: 2, description: 'Lê a aura, o humor e o estado emocional de alguém.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Um Turno', dicePool: 'Inteligência + Auspícios', systemNotes: 'Resistido por Autocontrole + Lábia.' },
      { name: 'Compartilhar Sentidos', level: 3, description: 'O vampiro enxerga e ouve através dos sentidos de outro ser.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Determinação + Auspícios', systemNotes: 'Requer toque ou conexão com o sangue do alvo.' },
      { name: 'Toque do Espírito', level: 3, description: 'Lê impressões psíquicas e memórias atreladas a objetos inanimados.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Instantâneo', dicePool: 'Inteligência + Auspícios', systemNotes: 'Dificuldade varia conforme a idade da memória.' },
      { name: 'Telepatia', level: 4, description: 'Comunicação mental silenciosa e leitura de pensamentos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Determinação + Auspícios', systemNotes: 'Para ler mentes: Resistido por Raciocínio + Lábia.' },
      { name: 'Clarividência', level: 5, description: 'Visão e audição remota de locais distantes.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: 'Inteligência + Auspícios', systemNotes: 'Requer familiaridade prévia com o local.' },
    ]
  },
  {
    name: 'Rapidez',
    description: 'A disciplina da velocidade sobrenatural e reflexos inumanos. O vampiro se move mais rápido do que os olhos mortais podem acompanhar.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Graça Felina', level: 1, description: 'Garante equilíbrio perfeito e ausência de dano de quedas.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'Adiciona os dados de Rapidez em testes de Destreza de movimento.' },
      { name: 'Reflexos Rápidos', level: 1, description: 'Tempo de reação impossível.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'Ignora penalidades de cobertura leve e atira/esquiva primeiro.' },
      { name: 'Ligeireza', level: 2, description: 'Acelera a velocidade de movimento a níveis predatórios.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Soma o valor de Rapidez a todos os testes de perseguição.' },
      { name: 'Lampejo', level: 3, description: 'Movimento instantâneo, sumindo de um ponto e aparecendo em outro.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Um Turno', dicePool: '-', systemNotes: 'O vampiro pode percorrer até 50 metros em linha reta instantaneamente.' },
      { name: 'Travessia', level: 4, description: 'Corre pelas paredes e até por cima da água.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Permite correr em qualquer superfície sem cair enquanto não parar.' },
      { name: 'Fração de Segundo', level: 5, description: 'O mundo congela. O vampiro pode realizar múltiplas coisas.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Um Turno', dicePool: '-', systemNotes: 'Ganha uma ação extra completa no turno de combate.' },
    ]
  },
  {
    name: 'Fortitude',
    description: 'A disciplina da resistência e vitalidade sobrenaturais. Torna a carne do vampiro dura como aço e a mente inquebrável.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Resiliência', level: 1, description: 'Adiciona caixas de Vitalidade extras.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'Soma o nível de Fortitude às caixas de Vitalidade Máxima do vampiro.' },
      { name: 'Mente Inabalável', level: 1, description: 'Protege a mente contra influências e intimidação.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'Adiciona os dados de Fortitude em rolagens para resistir à Coação e Dominação.' },
      { name: 'Dureza', level: 2, description: 'A pele absorve os impactos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Subtrai o nível de Fortitude de todo dano superficial recebido (após rolar a defesa).' },
      { name: 'Feras Resilientes', level: 3, description: 'Estende os poderes de Fortitude aos animais controlados pelo vampiro.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Transfere Dureza e Resiliência aos lacaios animais (Ghouls ou Animalismo).' },
      { name: 'Carne de Mármore', level: 4, description: 'O corpo se torna quase indestrutível, quebrando lâminas e ignorando fogo leve.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Converte o primeiro ponto de dano agravado recebido no turno em dano superficial.' },
      { name: 'Proeza através da Dor', level: 5, description: 'A dor fortalece os músculos mortos do vampiro.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Adiciona todos os pontos de dano recebidos aos atributos físicos do personagem.' },
    ]
  },
  {
    name: 'Ofuscação',
    description: 'A disciplina da furtividade sobrenatural. Ela afeta as mentes dos observadores, forçando-os a ignorar ou não ver o vampiro.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Manto das Sombras', level: 1, description: 'O vampiro se mescla às sombras, ficando invisível enquanto permanecer parado e escondido.', costType: 'Livre', costAmount: 0, duration: 'Até se mover', dicePool: 'Raciocínio + Ofuscação', systemNotes: 'Quebra caso o vampiro faça alguma ação óbvia ou seja iluminado diretamente.' },
      { name: 'Silêncio da Morte', level: 1, description: 'Elimina completamente todos os sons produzidos pelo vampiro.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Ignora testes de Furtividade relacionados a barulho. Tudo ao redor dele fica mudo.' },
      { name: 'Passagem Invisível', level: 2, description: 'Invisibilidade total mesmo em movimento.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Raciocínio + Ofuscação', systemNotes: 'Resistido por Raciocínio + Auspícios por quem estiver ativamente procurando.' },
      { name: 'Máscara de Mil Faces', level: 3, description: 'Altera as percepções dos outros para fazer o vampiro parecer ser uma pessoa completamente diferente.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Até Desativar', dicePool: 'Manipulação + Ofuscação', systemNotes: 'Pode copiar alguém específico se passar em um teste de Percepção ou Lábia.' },
      { name: 'Desaparecer', level: 4, description: 'Ficar invisível subitamente, mesmo estando sob observação direta.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Raciocínio + Ofuscação', systemNotes: 'Permite ativar a Passagem Invisível no meio de um combate ou diálogo.' },
      { name: 'Ocultar o Grupo', level: 5, description: 'Estende os poderes de Ofuscação (invisibilidade, máscara) para o Coterie.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: 'Raciocínio + Ofuscação', systemNotes: 'O número máximo de aliados protegidos é igual ao nível de Ofuscação do vampiro.' },
    ]
  },
  {
    name: 'Potência',
    description: 'A disciplina da força física esmagadora. Socos que furam o peito, saltos que vencem prédios.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Corpo Letal', level: 1, description: 'A força do vampiro se torna assassina.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'Todo dano físico desarmado do vampiro causa dano agravado a humanos.' },
      { name: 'Salto Prodigioso', level: 1, description: 'O vampiro salta distâncias impossíveis.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'O vampiro pode saltar a altura de um prédio pequeno sem necessidade de corrida prévia.' },
      { name: 'Proeza', level: 2, description: 'Soma Potência diretamente ao estrago causado.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: 'Adiciona o nível de Potência em pontos de dano em todos os sucessos de combate corporal.' },
      { name: 'Alimentação Brutal', level: 3, description: 'Beber o sangue destruindo a vítima instantaneamente no processo.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Alimentação', dicePool: '-', systemNotes: 'Permite sugar uma presa humana seca em apenas 1 turno, matando-a instantaneamente.' },
      { name: 'Centelha de Fúria', level: 4, description: 'O vampiro bate no alvo com tanta força bruta que incita pânico ou fúria.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Um Turno', dicePool: '-', systemNotes: 'Ao golpear um mortal, a força aterroriza. Se for um vampiro, pode acionar frenesi (Resistido por Autocontrole + Inteligência).' },
      { name: 'Tremor de Terra', level: 5, description: 'O vampiro bate no chão ou parede, causando um sismo localizado.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Instantâneo', dicePool: 'Força + Potência', systemNotes: 'Derruba e causa dano de concussão a todos próximos ao ponto de impacto.' },
    ]
  },
  {
    name: 'Presença',
    description: 'A disciplina da atração, emoção e manipulação carismática. Atrai ou repele multidões apenas por existir.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Fascínio', level: 1, description: 'Atrai instantaneamente os olhares e o desejo das pessoas ao redor.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Manipulação + Presença', systemNotes: 'Resistido por Autocontrole + Inteligência. Os afetados farão de tudo para agradar o vampiro.' },
      { name: 'Intimidar (Olhar Aterrador)', level: 1, description: 'Emana uma aura de medo primitivo e repulsa.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Carisma + Presença', systemNotes: 'Resistido por Autocontrole + Determinação. Os afetados recuam e evitam atacar o vampiro.' },
      { name: 'Beijo Persistente', level: 2, description: 'Torna o Beijo do vampiro altamente viciante e letárgico.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: 'As vítimas do beijo do vampiro farão de tudo por uma nova dose da mordida.' },
      { name: 'Transe', level: 3, description: 'Lava a mente do alvo com servidão e amor profundo pelo vampiro.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Dias ou Semanas', dicePool: 'Carisma + Presença', systemNotes: 'A duração da devoção aumenta com mais sucessos na rolagem.' },
      { name: 'Convocar', level: 4, description: 'Chama magicamente uma pessoa que o vampiro já conheça.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Até a pessoa chegar', dicePool: 'Manipulação + Presença', systemNotes: 'A pessoa virá ao encontro do vampiro imediatamente pelo caminho mais rápido.' },
      { name: 'Majestade', level: 5, description: 'O ápice da admiração aterrorizante. O vampiro é visto como um deus.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: 'Carisma + Presença', systemNotes: 'Ninguém ousa atacar ou contrariar o vampiro, nem mesmo sob frenesi.' },
    ]
  },
  {
    name: 'Dominação',
    description: 'A disciplina da manipulação mental ditatorial. Substitui a vontade da vítima pela vontade inquestionável do vampiro.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Turvar a Memória', level: 1, description: 'Apaga os últimos minutos da memória de uma vítima.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Permanente', dicePool: 'Carisma + Dominação', systemNotes: 'Resistido por Inteligência + Determinação. A vítima esquece a interação atual.' },
      { name: 'Compelir', level: 1, description: 'Obriga a vítima a realizar uma ação simples de uma ou duas palavras.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Imediato', dicePool: 'Carisma + Dominação', systemNotes: 'Ex: "Corra", "Durma", "Largue". Resistido por Inteligência + Determinação.' },
      { name: 'Hipnotizar', level: 2, description: 'Planta um comando complexo na mente da vítima.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Até ser cumprido', dicePool: 'Manipulação + Dominação', systemNotes: 'Requer contato visual contínuo durante a ordem.' },
      { name: 'Demência', level: 3, description: 'Sobrecarrega a mente do alvo com pesadelos e impulsos Malkavianos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Manipulação + Dominação', systemNotes: 'Quebra a sanidade momentânea do alvo (Malkavianos são os mestres disso).' },
      { name: 'A Mente Esquecida', level: 4, description: 'O vampiro rescreve minuciosamente os blocos de memória e história de vida do alvo.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Permanente', dicePool: 'Manipulação + Dominação', systemNotes: 'Pode apagar noites ou décadas, dependendo dos sucessos.' },
      { name: 'Manipulação em Massa', level: 5, description: 'Estende os poderes de Compelir e Hipnotizar para uma multidão inteira.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Variável', dicePool: 'Carisma + Dominação', systemNotes: 'Todos que puderem ouvir e ver o vampiro são afetados pela ordem.' },
    ]
  }
];

async function seed() {
  try {
    console.log('Sincronizando as tabelas DefinitionDiscipline e DefinitionDisciplinePower...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${disciplinesData.length} Disciplinas e seus 42 poderes...`);
    
    for (const disc of disciplinesData) {
      // Cria a disciplina principal
      const [disciplineModel] = await DefinitionDiscipline.findOrCreate({
        where: { name: disc.name },
        defaults: {
          name: disc.name,
          description: disc.description,
          gameStyle: disc.gameStyle as any
        }
      });

      // Cria os poderes atrelados
      for (const power of disc.powers) {
        await DefinitionDisciplinePower.findOrCreate({
          where: { 
            definitionDisciplineId: disciplineModel.id,
            name: power.name 
          },
          defaults: {
            definitionDisciplineId: disciplineModel.id,
            name: power.name,
            level: power.level,
            description: power.description,
            costType: power.costType,
            costAmount: power.costAmount,
            duration: power.duration,
            dicePool: power.dicePool,
            systemNotes: power.systemNotes,
            gameStyle: disc.gameStyle as any
          }
        });
      }
    }

    console.log(`✅ Seed de Disciplinas e Poderes (V5) finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
