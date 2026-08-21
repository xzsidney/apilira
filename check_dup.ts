import { sequelize, CreationPackageItem } from './src/models';
async function run() {
  await sequelize.authenticate();
  const items = await CreationPackageItem.findAll({ where: { itemType: 'PREDATOR' } });
  console.log('TOTAL PREDATOR ITEMS:', items.length);
  
  // Find packages with > 1 predator
  const pkgCounts = items.reduce((acc, item) => {
    acc[item.packageId] = (acc[item.packageId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  for (const [pkgId, count] of Object.entries(pkgCounts)) {
    if (count > 1) {
      console.log(`Package ${pkgId} has ${count} PREDATOR items! DELETING DUPLICATES...`);
      // Delete duplicates, keep one
      const dups = items.filter(i => i.packageId === pkgId);
      for (let i = 1; i < dups.length; i++) {
        await dups[i].destroy();
      }
    }
  }
  process.exit(0);
}
run();
