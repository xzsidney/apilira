import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionSkill, DefinitionSkill } from '../src/models/DefinitionSkill';
initDefinitionSkill(sequelize);

const skillsData = [
  // TALENTOS
  { name: 'Prontidão', description: 'Capacidade de perceber os arredores rapidamente.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Esportes', description: 'Atividades físicas como correr, pular, escalar.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Briga', description: 'Luta corporal sem armas.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Esquiva', description: 'Desviar de golpes e projéteis.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Empatia', description: 'Compreender os sentimentos de outras pessoas.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Intimidação', description: 'Coagir ou assustar alguém.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Liderança', description: 'Inspirar e comandar grupos.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Manha', description: 'Sobrevivência nas ruas e submundos.', type: 'TALENTOS', gameStyle: 'TODOS' },
  { name: 'Lábia', description: 'Mentir, enganar e ocultar a verdade.', type: 'TALENTOS', gameStyle: 'TODOS' },
  
  // PERÍCIAS
  { name: 'Sobrevivência', description: 'Viver em ambientes inóspitos.', type: 'PERICIAS', gameStyle: 'TODOS' },
  { name: 'Furtividade', description: 'Mover-se em silêncio e sem ser visto.', type: 'PERICIAS', gameStyle: 'TODOS' },
  { name: 'Armas de Fogo', description: 'Uso de armas de longa distância e pistolas.', type: 'PERICIAS', gameStyle: 'TODOS' },
  { name: 'Armas Brancas', description: 'Uso de espadas, facas e armas corpo a corpo.', type: 'PERICIAS', gameStyle: 'TODOS' },
  { name: 'Condução', description: 'Dirigir carros, motos e outros veículos.', type: 'PERICIAS', gameStyle: 'TODOS' },
  { name: 'Etiqueta', description: 'Boas maneiras na alta sociedade e no tribunal.', type: 'PERICIAS', gameStyle: 'TODOS' },
  { name: 'Ofícios', description: 'Construir, consertar ou fabricar objetos.', type: 'PERICIAS', gameStyle: 'TODOS' },
  
  // CONHECIMENTOS
  { name: 'Acadêmicos', description: 'Conhecimento escolar superior e artes literais.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Computador', description: 'Uso e invasão de sistemas de computador.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Finanças', description: 'Entendimento de economia e lavagem de dinheiro.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Investigação', description: 'Achar pistas ocultas e resolver mistérios.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Direito', description: 'Conhecimento de leis locais e internacionais.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Medicina', description: 'Tratamento de feridas e biologia.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Ocultismo', description: 'Conhecimento do sobrenatural, mitos e magias.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Política', description: 'Conhecimento do jogo político mortal.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
  { name: 'Ciências', description: 'Física, química e biologia aplicadas.', type: 'CONHECIMENTOS', gameStyle: 'TODOS' },
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionSkill...');
    await sequelize.sync({ alter: true });

    console.log('Populando Habilidades...');
    for (const skill of skillsData) {
      await DefinitionSkill.findOrCreate({
        where: { name: skill.name },
        defaults: skill as any
      });
    }

    console.log('✅ Seed de Habilidades finalizado com sucesso no Hostinger!');
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
