"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefinitionStoryAdventure_1 = __importDefault(require("./models/DefinitionStoryAdventure"));
const DefinitionStoryNode_1 = __importDefault(require("./models/DefinitionStoryNode"));
const DefinitionStoryChoice_1 = __importDefault(require("./models/DefinitionStoryChoice"));
async function seedTestAdventure() {
    try {
        const adv = await DefinitionStoryAdventure_1.default.create({
            title: 'A Noite Inicial',
            description: 'Uma crônica de teste para avaliar o motor narrativo.',
        });
        const node1 = await DefinitionStoryNode_1.default.create({
            adventureId: adv.id,
            narrativeText: 'Você acorda em um beco sujo. A fome queima sua garganta como brasa. Diante de você, um mortal embriagado cambaleia. O que você faz?',
            isEnding: false,
            backgroundImageUrl: 'https://images.unsplash.com/photo-1604085448625-e593e877fc54?q=80&w=1920&auto=format&fit=crop', // Dark alley
            speakerName: 'O Narrador',
            leftCharacterImageUrl: '',
            rightCharacterImageUrl: 'https://i.pinimg.com/originals/9f/c7/27/9fc7274092b7754b2361427a13c9e99a.png', // Random placeholder for a character
        });
        adv.firstNodeId = node1.id;
        await adv.save();
        const nodeSuccess = await DefinitionStoryNode_1.default.create({
            adventureId: adv.id,
            narrativeText: 'Com movimentos rápidos e silenciosos, você o domina e se alimenta. A fome diminui. A noite é sua.',
            isEnding: true,
            backgroundImageUrl: 'https://images.unsplash.com/photo-1616851173956-621e8e2e288e?q=80&w=1920&auto=format&fit=crop', // Red/Dark abstract
        });
        const nodeFail = await DefinitionStoryNode_1.default.create({
            adventureId: adv.id,
            narrativeText: 'Você hesita e ele percebe sua aproximação. Ele grita e foge, chamando a atenção de pessoas próximas. Você precisa recuar de mãos vazias.',
            isEnding: true,
            backgroundImageUrl: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1920&auto=format&fit=crop', // Street running
        });
        await DefinitionStoryChoice_1.default.create({
            nodeId: node1.id,
            choiceText: '[PREDADOR] Atacar sorrateiramente (Força + Furtividade)',
            attributeReq: 'Força',
            skillReq: 'Furtividade',
            difficulty: 1,
            successNodeId: nodeSuccess.id,
            failureNodeId: nodeFail.id,
            customStyle: 'DISCIPLINE'
        });
        console.log('Test adventure seeded successfully!');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding adventure:', error);
        process.exit(1);
    }
}
seedTestAdventure();
