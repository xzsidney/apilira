import { sequelize, DefinitionAttribute, DefinitionSkill } from './src/models';

async function run() {
  try {
    const attrs = await DefinitionAttribute.findAll();
    console.log('ATTRS:', attrs.map(a => a.name).join(', '));
    const skills = await DefinitionSkill.findAll();
    console.log('SKILLS:', skills.map(a => a.name).join(', '));
  } catch(e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
}
run();
