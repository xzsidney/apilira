import { sequelize, CharacterVampire } from './src/models';
async function run() {
  await sequelize.authenticate();
  const chars = await CharacterVampire.findAll({ limit: 5 });
  console.log(chars.map(c => ({ name: c.name, avatar: c.avatarUrl })));
  process.exit(0);
}
run();
