import { sequelize, DefinitionBackground, DefinitionMeritFlaw } from './src/models';
async function run() {
  await sequelize.authenticate();
  const bgs = await DefinitionBackground.findAll();
  console.log('BACKGROUNDS:', bgs.map(b => b.name));
  process.exit(0);
}
run();
