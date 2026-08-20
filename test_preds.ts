import { sequelize, CreationPackage, CreationPackageItem } from './src/models';

async function run() {
  await sequelize.authenticate();
  const preds = await CreationPackage.findAll({ 
    where: { packageType: 'PREDATOR_CHOICE' }, 
    include: [CreationPackageItem] 
  });
  console.log(JSON.stringify(preds, null, 2));
  process.exit(0);
}
run();
