"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefinitionStoryNode_1 = __importDefault(require("./models/DefinitionStoryNode"));
async function fixStoryImages() {
    try {
        const nodes = await DefinitionStoryNode_1.default.findAll();
        for (const node of nodes) {
            if (node.narrativeText.includes('Você acorda em um beco')) {
                node.backgroundImageUrl = '/story_assets/dark_alley.jpg';
                node.rightCharacterImageUrl = '/story_assets/vampire_sprite.jpg';
                node.leftCharacterImageUrl = '/story_assets/drunk_mortal.jpg';
                await node.save();
            }
        }
        console.log('Images fixed.');
        process.exit(0);
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
fixStoryImages();
