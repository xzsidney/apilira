"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefinitionStoryAdventure_1 = __importDefault(require("./models/DefinitionStoryAdventure"));
const DefinitionStoryNode_1 = __importDefault(require("./models/DefinitionStoryNode"));
const DefinitionStoryChoice_1 = __importDefault(require("./models/DefinitionStoryChoice"));
const CharacterStoryProgress_1 = __importDefault(require("./models/CharacterStoryProgress"));
async function syncNewModels() {
    try {
        console.log('Syncing DefinitionStoryAdventure...');
        await DefinitionStoryAdventure_1.default.sync({ alter: true });
        console.log('Syncing DefinitionStoryNode...');
        await DefinitionStoryNode_1.default.sync({ alter: true });
        console.log('Syncing DefinitionStoryChoice...');
        await DefinitionStoryChoice_1.default.sync({ alter: true });
        console.log('Syncing CharacterStoryProgress...');
        await CharacterStoryProgress_1.default.sync({ alter: true });
        console.log('All new story models synced successfully.');
        process.exit(0);
    }
    catch (error) {
        console.error('Error syncing models:', error);
        process.exit(1);
    }
}
syncNewModels();
