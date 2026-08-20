import { sequelize, CharacterVampire, CharacterVampireAttribute, DefinitionAttribute } from './src/models';

async function run() {
  await sequelize.authenticate();
  const chars = await CharacterVampire.findAll({ 
    include: [{ model: CharacterVampireAttribute, include: [DefinitionAttribute] }], 
    limit: 1, 
    order: [['createdAt', 'DESC']] 
  });
  console.log(JSON.stringify((chars[0] as any)?.CharacterVampireAttributes, null, 2));
  process.exit(0);
}
run();
