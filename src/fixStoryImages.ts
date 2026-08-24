import { sequelize } from './models';
import DefinitionStoryNode from './models/DefinitionStoryNode';

async function fixStoryImages() {
  try {
    const nodes = await DefinitionStoryNode.findAll();
    for (const node of nodes) {
      if (node.narrativeText.includes('Você acorda em um beco')) {
        node.backgroundImageUrl = '/story_assets/dark_alley.jpg';
        node.rightCharacterImageUrl = '/story_assets/vampire_sprite.jpg';
        await node.save();
      }
    }
    console.log('Images fixed.');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

fixStoryImages();
