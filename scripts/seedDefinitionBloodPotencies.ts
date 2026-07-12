import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionBloodPotency, DefinitionBloodPotency } from '../src/models/DefinitionBloodPotency';

initDefinitionBloodPotency(sequelize);

const bloodPotenciesData = [
  { level: 0, bloodSurge: 'Nenhum bônus', mendAmount: 'Cura 1 Dano Superficial', disciplineBonus: 'Nenhum bônus', baneSeverity: 0, feedingPenalty: 'Nenhuma penalidade de alimentação. Pode comer comida humana.', gameStyle: 'VAMPIRE' },
  { level: 1, bloodSurge: 'Adiciona 1 dado', mendAmount: 'Cura 1 Dano Superficial', disciplineBonus: 'Nenhum bônus', baneSeverity: 1, feedingPenalty: 'Nenhuma penalidade de alimentação.', gameStyle: 'VAMPIRE' },
  { level: 2, bloodSurge: 'Adiciona 1 dado', mendAmount: 'Cura 1 Dano Superficial', disciplineBonus: 'Adiciona 1 dado em rolagens de Disciplina', baneSeverity: 1, feedingPenalty: 'Sangue animal e bolsa de sangue não saciam a Fome.', gameStyle: 'VAMPIRE' },
  { level: 3, bloodSurge: 'Adiciona 2 dados', mendAmount: 'Cura 2 Danos Superficiais', disciplineBonus: 'Adiciona 1 dado em rolagens de Disciplina', baneSeverity: 2, feedingPenalty: 'Sangue animal e bolsa de sangue não saciam a Fome.', gameStyle: 'VAMPIRE' },
  { level: 4, bloodSurge: 'Adiciona 2 dados', mendAmount: 'Cura 2 Danos Superficiais', disciplineBonus: 'Adiciona 2 dados em rolagens de Disciplina', baneSeverity: 2, feedingPenalty: 'Sangue animal e bolsa de sangue não saciam a Fome. Sangue sem ressonância de humanos sacia metade.', gameStyle: 'VAMPIRE' },
  { level: 5, bloodSurge: 'Adiciona 3 dados', mendAmount: 'Cura 3 Danos Superficiais', disciplineBonus: 'Adiciona 2 dados em rolagens de Disciplina', baneSeverity: 3, feedingPenalty: 'Sangue animal e bolsa não saciam. Sangue humano sacia metade da fome se não tiver ressonância. Beber de um humano causa Dano Agravado a ele.', gameStyle: 'VAMPIRE' },
  { level: 6, bloodSurge: 'Adiciona 3 dados', mendAmount: 'Cura 3 Danos Superficiais', disciplineBonus: 'Adiciona 3 dados em rolagens de Disciplina', baneSeverity: 3, feedingPenalty: 'Qualquer sangue humano sacia apenas metade da fome. Animais e bolsas são inúteis.', gameStyle: 'VAMPIRE' },
  { level: 7, bloodSurge: 'Adiciona 4 dados', mendAmount: 'Cura 3 Danos Superficiais', disciplineBonus: 'Adiciona 3 dados em rolagens de Disciplina', baneSeverity: 4, feedingPenalty: 'Qualquer sangue humano sacia apenas metade da fome. Beber de um humano causa Dano Agravado a ele.', gameStyle: 'VAMPIRE' },
  { level: 8, bloodSurge: 'Adiciona 4 dados', mendAmount: 'Cura 4 Danos Superficiais', disciplineBonus: 'Adiciona 4 dados em rolagens de Disciplina', baneSeverity: 4, feedingPenalty: 'Sangue humano sacia apenas metade. Para reduzir Fome 2 ou 1 é obrigatório beber Sangue de Vampiro.', gameStyle: 'VAMPIRE' },
  { level: 9, bloodSurge: 'Adiciona 5 dados', mendAmount: 'Cura 4 Danos Superficiais', disciplineBonus: 'Adiciona 4 dados em rolagens de Disciplina', baneSeverity: 5, feedingPenalty: 'Sangue humano sacia apenas metade. Para reduzir Fome 2 ou 1 é obrigatório beber Sangue de Vampiro. Beber de humanos os fere mortalmente.', gameStyle: 'VAMPIRE' },
  { level: 10, bloodSurge: 'Adiciona 5 dados', mendAmount: 'Cura 5 Danos Superficiais', disciplineBonus: 'Adiciona 5 dados em rolagens de Disciplina', baneSeverity: 5, feedingPenalty: 'Sangue humano e animal é inútil. Só consegue se alimentar do sangue de outros Vampiros.', gameStyle: 'VAMPIRE' },
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionBloodPotency...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${bloodPotenciesData.length} níveis de Potência de Sangue (0 ao 10)...`);
    
    for (const potency of bloodPotenciesData) {
      await DefinitionBloodPotency.findOrCreate({
        where: { level: potency.level },
        defaults: potency as any
      });
    }

    console.log(`✅ Seed de Potência de Sangue finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
