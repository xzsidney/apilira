import { sequelize, DefinitionPredator } from './src/models';
async function run() {
  await sequelize.authenticate();
  const preds = await DefinitionPredator.findAll();
  console.log(JSON.stringify(preds, null, 2));
  process.exit(0);
}
run();
