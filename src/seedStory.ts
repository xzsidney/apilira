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
      isEnding: false
    } as any);

    adv.firstNodeId = node1.id;
    await adv.save();

    const nodeSuccess = await DefinitionStoryNode.create({
      adventureId: adv.id,
      narrativeText: 'Com movimentos rápidos e silenciosos, você o domina e se alimenta. A fome diminui. A noite é sua.',
      isEnding: true
    } as any);

    const nodeFail = await DefinitionStoryNode.create({
      adventureId: adv.id,
      narrativeText: 'Você hesita e ele percebe sua aproximação. Ele grita e foge, chamando a atenção de pessoas próximas. Você precisa recuar de mãos vazias.',
      isEnding: true
    } as any);

    await DefinitionStoryChoice.create({
      nodeId: node1.id,
      choiceText: 'Atacar sorrateiramente (Força + Furtividade)',
      attributeReq: 'Força',
      skillReq: 'Furtividade',
      difficulty: 1,
      successNodeId: nodeSuccess.id,
      failureNodeId: nodeFail.id
    } as any);

    console.log('Test adventure seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding adventure:', error);
    process.exit(1);
  }
}

seedTestAdventure();
