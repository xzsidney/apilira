import { sequelize, CreationPackageItem } from './src/models';
async function run() {
  await sequelize.authenticate();
  const items = await CreationPackageItem.findAll({ limit: 50 });
  const types = new Set(items.map(i => i.itemType));
  console.log('ITEM TYPES IN DB:', Array.from(types));
  process.exit(0);
}
run();
