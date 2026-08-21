import { sequelize, CreationPackage, CreationPackageItem } from './src/models';
async function run() {
  await sequelize.authenticate();
  const pkgs = await CreationPackage.findAll({ include: [CreationPackageItem] });
  console.log('TYPES:', Array.from(new Set(pkgs.map(p => p.packageType))));
  console.log('BACKGROUND PKGS:', pkgs.filter(p => p.packageType === 'BACKGROUND_BUNDLE').map(p => ({
    name: p.name,
    items: (p as any).CreationPackageItems?.map((i:any) => ({ type: i.itemType, amount: i.amount, ref: i.referenceId }))
  })));
  process.exit(0);
}
run();
