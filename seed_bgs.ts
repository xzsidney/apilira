import { sequelize, CreationPackage, CreationPackageItem, DefinitionBackground } from './src/models';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  const transaction = await sequelize.transaction();
  try {
    const pkgs = await CreationPackage.findAll({ where: { packageType: 'BACKGROUND_BUNDLE' } });
    const bgs = await DefinitionBackground.findAll();

    const getBg = (name: string) => bgs.find(b => b.name === name)?.id;

    for (const pkg of pkgs) {
      if (pkg.name === 'Sobrevivente das Ruas') {
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Contatos')!, amount: 2 }, { transaction });
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Aliados')!, amount: 1 }, { transaction });
      }
      else if (pkg.name === 'Influenciador Digital') {
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Fama')!, amount: 2 }, { transaction });
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Influência')!, amount: 1 }, { transaction });
      }
      else if (pkg.name === 'Criminoso Procurado') {
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Contatos')!, amount: 3 }, { transaction });
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Recursos')!, amount: 1 }, { transaction });
      }
      else if (pkg.name === 'Herdeiro Corporativo') {
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Recursos')!, amount: 3 }, { transaction });
        await CreationPackageItem.create({ id: uuidv4(), packageId: pkg.id, itemType: 'BACKGROUND', referenceId: getBg('Status')!, amount: 1 }, { transaction });
      }
    }

    await transaction.commit();
    console.log("Seeded backgrounds for Background Bundles!");
    process.exit(0);
  } catch(e) {
    await transaction.rollback();
    console.error(e);
    process.exit(1);
  }
}
run();
