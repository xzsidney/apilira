"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefinitionStoryAdventure_1 = __importDefault(require("./models/DefinitionStoryAdventure"));
const DefinitionStoryNode_1 = __importDefault(require("./models/DefinitionStoryNode"));
const DefinitionStoryChoice_1 = __importDefault(require("./models/DefinitionStoryChoice"));
const CharacterStoryProgress_1 = __importDefault(require("./models/CharacterStoryProgress"));
async function cleanStoryTables() {
    try {
        console.log('Cleaning story tables...');
        await CharacterStoryProgress_1.default.destroy({ where: {}, truncate: true, cascade: true });
        await DefinitionStoryChoice_1.default.destroy({ where: {}, truncate: true, cascade: true });
        await DefinitionStoryNode_1.default.destroy({ where: {}, truncate: true, cascade: true });
        await DefinitionStoryAdventure_1.default.destroy({ where: {}, truncate: true, cascade: true });
        console.log('Story tables cleaned successfully.');
        process.exit(0);
    }
    catch (error) {
        console.error('Error cleaning story tables:', error);
        process.exit(1);
    }
}
cleanStoryTables();
