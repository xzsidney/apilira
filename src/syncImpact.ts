import { sequelize } from './models';
import DefinitionStoryAdventure from './models/DefinitionStoryAdventure';
import DefinitionMissionIdle from './models/DefinitionMissionIdle';
import CharacterActivityLog from './models/CharacterActivityLog';

async function syncUpdates() {
  try {
    console.log('Syncing database for new Unified Impact system...');
    
    // Add columns if they don't exist
    await sequelize.query(`
      ALTER TABLE definition_story_adventures 
      ADD COLUMN maxCompletions INT DEFAULT NULL;
    `).catch(() => console.log('maxCompletions already exists in definition_story_adventures'));

    await sequelize.query(`
      ALTER TABLE definition_missions_idle 
      ADD COLUMN maxCompletions INT DEFAULT NULL;
    `).catch(() => console.log('maxCompletions already exists in definition_missions_idle'));

    // Create new table safely
    await CharacterActivityLog.sync({ alter: true });
    
    console.log('Sync complete!');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

syncUpdates();
