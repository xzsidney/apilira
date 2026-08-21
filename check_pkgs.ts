import { sequelize, CreationPackage, CreationPackageItem } from './src/models';
async function run() {
  await sequelize.authenticate();
  const pkgs = await CreationPackage.findAll({ where: { packageType: 'BACKGROUND' }, include: [CreationPackageItem] });
  console.log(JSON.stringify(pkgs, null, 2));
  process.exit(0);
}
run();
