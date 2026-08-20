import { sequelize, DefinitionClan } from './src/models';
async function run() {
  await sequelize.authenticate();
  const clans = await DefinitionClan.findAll();
  console.log(JSON.stringify(clans, null, 2));
  process.exit(0);
}
run();
