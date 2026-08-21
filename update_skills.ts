import { sequelize, DefinitionSkill } from './src/models';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  const transaction = await sequelize.transaction();
  try {
    const skills = await DefinitionSkill.findAll();
    const updateMap: Record<string, string> = {
      'Esquiva': 'Ladroagem',
      'Acadêmicos': 'Erudição',
      'Ciências': 'Ciência',
      'Lábia': 'Persuasão',
      'Computador': 'Tecnologia',
      'Direito': 'Empatia com Animais',
      'Empatia': 'Sagacidade',
      'Prontidão': 'Percepção',
      'Esportes': 'Atletismo'
    };

    for (const skill of skills) {
      if (updateMap[skill.name]) {
        await skill.update({ name: updateMap[skill.name], type: 'V5' }, { transaction });
      } else {
        await skill.update({ type: 'V5' }, { transaction });
      }
    }

    // Add missing
    const missing = ['Performance', 'Subterfúgio'];
    for (const name of missing) {
      const exists = await DefinitionSkill.findOne({ where: { name } });
      if (!exists) {
        await DefinitionSkill.create({
          id: uuidv4(),
          name,
          description: 'Habilidade V5',
          type: 'V5',
          gameStyle: 'VAMPIRE'
        }, { transaction });
      }
    }

    await transaction.commit();
    console.log("Skills updated to V5 standards!");
    process.exit(0);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    process.exit(1);
  }
}
run();
