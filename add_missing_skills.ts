import { sequelize, CharacterVampire, CharacterVampireSkill, DefinitionSkill } from './src/models';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  const transaction = await sequelize.transaction();
  try {
    const allCharacters = await CharacterVampire.findAll();
    const allDefinitionSkills = await DefinitionSkill.findAll();

    for (const character of allCharacters) {
      // Get current skills
      const currentSkills = await CharacterVampireSkill.findAll({
        where: { characterVampireId: character.id }
      });
      const currentSkillIds = new Set(currentSkills.map(s => s.definitionSkillId));

      // Add missing ones
      for (const def of allDefinitionSkills) {
        if (!currentSkillIds.has(def.id)) {
          await CharacterVampireSkill.create({
            characterVampireId: character.id,
            definitionSkillId: def.id,
            value: 0
          }, { transaction });
        }
      }
    }

    await transaction.commit();
    console.log("All existing characters have been updated with the 27 skills!");
    process.exit(0);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    process.exit(1);
  }
}
run();
