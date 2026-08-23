import { sequelize } from './models';
import DefinitionStoryAdventure from './models/DefinitionStoryAdventure';
import DefinitionStoryNode from './models/DefinitionStoryNode';
import DefinitionStoryChoice from './models/DefinitionStoryChoice';

async function seedTestAdventure() {
  try {
    const adv = await DefinitionStoryAdventure.create({
      title: 'A Noite Inicial',
      description: 'Uma crônica de teste para avaliar o motor narrativo.',
    } as any);

    const node1 = await DefinitionStoryNode.create({
      adventureId: adv.id,
      narrativeText: 'Você acorda em um beco sujo. A fome queima sua garganta como brasa. Diante de você, um mortal embriagado cambaleia. O que você faz?',
      isEnding: false,
      backgroundImageUrl: 'https://images.unsplash.com/photo-1604085448625-e593e877fc54?q=80&w=1920&auto=format&fit=crop', // Dark alley
      speakerName: 'O Narrador',
      leftCharacterImageUrl: '',
      rightCharacterImageUrl: 'https://i.pinimg.com/originals/9f/c7/27/9fc7274092b7754b2361427a13c9e99a.png', // Random placeholder for a character
    } as any);

    adv.firstNodeId = node1.id;
    await adv.save();

    const nodeSuccess = await DefinitionStoryNode.create({
      adventureId: adv.id,
      narrativeText: 'Com movimentos rápidos e silenciosos, você o domina e se alimenta. A fome diminui. A noite é sua.',
      isEnding: true,
      backgroundImageUrl: 'https://images.unsplash.com/photo-1616851173956-621e8e2e288e?q=80&w=1920&auto=format&fit=crop', // Red/Dark abstract
    } as any);

    const nodeFail = await DefinitionStoryNode.create({
      adventureId: adv.id,
      narrativeText: 'Você hesita e ele percebe sua aproximação. Ele grita e foge, chamando a atenção de pessoas próximas. Você precisa recuar de mãos vazias.',
      isEnding: true,
      backgroundImageUrl: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1920&auto=format&fit=crop', // Street running
    } as any);

    await DefinitionStoryChoice.create({
      nodeId: node1.id,
      choiceText: '[PREDADOR] Atacar sorrateiramente (Força + Furtividade)',
      attributeReq: 'Força',
      skillReq: 'Furtividade',
      difficulty: 1,
      successNodeId: nodeSuccess.id,
      failureNodeId: nodeFail.id,
      customStyle: 'DISCIPLINE'
    } as any);

    console.log('Test adventure seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding adventure:', error);
    process.exit(1);
  }
}

seedTestAdventure();
