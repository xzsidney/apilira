import { sequelize, CreationPackage, CreationPackageItem, DefinitionPredator } from './src/models';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  const transaction = await sequelize.transaction();
  try {
    const pkgs = await CreationPackage.findAll({ where: { packageType: 'PREDATOR_CHOICE' }, include: [CreationPackageItem] });
    const preds = await DefinitionPredator.findAll();

    const predMap: Record<string, string[]> = {
      "Gato de Beco": ["O Brutamontes do Beco", "O Assaltante Furtivo", "O Cobrador Violento"],
      "Bolsista": ["O Falso Enfermeiro", "O Ladrão de Necrotério", "O Comprador Clandestino"],
      "Sanguessuga": ["O Caçador Ocultista", "O Diablerista Furtivo", "O Carrasco Sangrento"],
      "Consensualista": ["A Estrela Pop", "O Ídolo Quebrado", "O Líder do Culto"],
      "Fazendeiro": ["O Protetor do Parque", "O Açougueiro Noturno", "O Caçador de Matilha"],
      "Osíris": ["O Sedutor Clássico", "O Guru da Saúde", "O Mestre do Clube"],
      "Rainha da Cena": ["O Rei da Pista", "O Influenciador Gótico", "O Produtor de Eventos"],
      "Sereia": ["A Beleza Fatal", "O Pescador do Tinder", "O Amante Trágico"],
      "Sandman": ["O Ladrão de Janelas", "O Invasor Silencioso", "O Sonífero"],
      "Extorsionista": ["O Hacker Chantagista", "O Agiota Sombrio", "O Mafioso de Terno"],
      "Coveiro": ["O Coveiro Macabro", "O Anjo da Morte", "O Conselheiro do Luto"], // Need to match "Sepultureiro" maybe?
    };

    let count = 0;
    for (const pkg of pkgs) {
      // Find which predator this package belongs to
      let predName = null;
      for (const [pName, pkgNames] of Object.entries(predMap)) {
        if (pkgNames.includes(pkg.name)) {
          predName = pName;
          break;
        }
      }

      if (!predName) {
        if (pkg.name.includes("Coveiro") || pkg.name.includes("Morte") || pkg.name.includes("Luto")) predName = "Sepultureiro";
      }

      if (predName) {
        // Find DB Pred
        let dbPred = preds.find(p => p.name.includes(predName!));
        if (!dbPred && predName === 'Coveiro') dbPred = preds.find(p => p.name.includes('Sepultureiro'));
        
        if (dbPred) {
          // Add item
          await CreationPackageItem.create({
            id: uuidv4(),
            packageId: pkg.id,
            itemType: 'PREDATOR',
            referenceId: dbPred.id,
            amount: 1
          }, { transaction });
          count++;
        }
      }
    }
    
    await transaction.commit();
    console.log(`Added ${count} PREDATOR items!`);
    process.exit(0);
  } catch(e) {
    await transaction.rollback();
    console.error(e);
    process.exit(1);
  }
}
run();
