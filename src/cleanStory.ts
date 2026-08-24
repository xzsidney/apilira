import { sequelize } from './models';
import DefinitionStoryAdventure from './models/DefinitionStoryAdventure';
import DefinitionStoryNode from './models/DefinitionStoryNode';
import DefinitionStoryChoice from './models/DefinitionStoryChoice';
import CharacterStoryProgress from './models/CharacterStoryProgress';

async function cleanStoryTables() {
  try {
    console.log('Cleaning story tables...');
    await CharacterStoryProgress.destroy({ where: {}, truncate: true, cascade: true });
    await DefinitionStoryChoice.destroy({ where: {}, truncate: true, cascade: true });
    await DefinitionStoryNode.destroy({ where: {}, truncate: true, cascade: true });
    await DefinitionStoryAdventure.destroy({ where: {}, truncate: true, cascade: true });
    console.log('Story tables cleaned successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error cleaning story tables:', error);
    process.exit(1);
  }
}

cleanStoryTables();
