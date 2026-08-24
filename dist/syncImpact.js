"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const CharacterActivityLog_1 = __importDefault(require("./models/CharacterActivityLog"));
async function syncUpdates() {
    try {
        console.log('Syncing database for new Unified Impact system...');
        // Add columns if they don't exist
        await models_1.sequelize.query(`
      ALTER TABLE definition_story_adventures 
      ADD COLUMN maxCompletions INT DEFAULT NULL;
    `).catch(() => console.log('maxCompletions already exists in definition_story_adventures'));
        await models_1.sequelize.query(`
      ALTER TABLE definition_missions_idle 
      ADD COLUMN maxCompletions INT DEFAULT NULL;
    `).catch(() => console.log('maxCompletions already exists in definition_missions_idle'));
        // Create new table safely
        await CharacterActivityLog_1.default.sync({ alter: true });
        console.log('Sync complete!');
        process.exit(0);
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
syncUpdates();
