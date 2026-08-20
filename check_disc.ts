import { sequelize, CreationPackageItem } from './src/models';
async function run() {
  await sequelize.authenticate();
  const items = await CreationPackageItem.findAll({ where: { itemType: 'DISCIPLINE' } });
  console.log('DISCIPLINES:', items.length);
  process.exit(0);
}
run();
