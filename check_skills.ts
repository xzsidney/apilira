import { sequelize, DefinitionSkill } from './src/models';
async function run() {
  await sequelize.authenticate();
  const skills = await DefinitionSkill.findAll();
  console.log(Array.from(new Set(skills.map(s => s.type))));
  process.exit(0);
}
run();
