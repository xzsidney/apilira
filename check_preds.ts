import { sequelize, CreationPackage, CreationPackageItem } from './src/models';
async function run() {
  await sequelize.authenticate();
  const pkgs = await CreationPackage.findAll({ include: [CreationPackageItem] });
  console.log('PREDATOR PKGS:', pkgs.filter(p => p.packageType === 'PREDATOR_CHOICE').map(p => ({
    name: p.name,
    items: (p as any).CreationPackageItems?.map((i:any) => ({ type: i.itemType, amount: i.amount, ref: i.referenceId }))
  })));
  process.exit(0);
}
run();
