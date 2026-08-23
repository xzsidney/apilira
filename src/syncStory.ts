import { sequelize } from './models';
import DefinitionStoryAdventure from './models/DefinitionStoryAdventure';
import DefinitionStoryNode from './models/DefinitionStoryNode';
import DefinitionStoryChoice from './models/DefinitionStoryChoice';
import CharacterStoryProgress from './models/CharacterStoryProgress';

async function syncNewModels() {
  try {
    console.log('Syncing DefinitionStoryAdventure...');
    await DefinitionStoryAdventure.sync({ alter: true });
    console.log('Syncing DefinitionStoryNode...');
    await DefinitionStoryNode.sync({ alter: true });
    console.log('Syncing DefinitionStoryChoice...');
    await DefinitionStoryChoice.sync({ alter: true });
    console.log('Syncing CharacterStoryProgress...');
    await CharacterStoryProgress.sync({ alter: true });
    
    console.log('All new story models synced successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error syncing models:', error);
    process.exit(1);
  }
}

syncNewModels();
