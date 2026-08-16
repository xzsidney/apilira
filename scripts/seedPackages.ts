import sequelize from '../src/config/db';
import {
  CreationPackage,
  CreationPackageItem,
  DefinitionAttribute,
  DefinitionSkill,
  DefinitionClan,
  DefinitionPredator,
  DefinitionArchetype
} from '../src/models';

async function seedPackages() {
  try {
    console.log('Conectando ao banco de dados...');
    await sequelize.authenticate();
    
    console.log('Sincronizando tabelas de Pacotes (alter: true)...');
    await CreationPackage.sync({ alter: true });
    await CreationPackageItem.sync({ alter: true });

    await CreationPackageItem.destroy({ where: {} });
    await CreationPackage.destroy({ where: {} });

    const attrInt = await DefinitionAttribute.findOne({ where: { name: 'Inteligência' } });
    const attrFor = await DefinitionAttribute.findOne({ where: { name: 'Força' } });
    const attrDet = await DefinitionAttribute.findOne({ where: { name: 'Determinação' } });
    const attrCar = await DefinitionAttribute.findOne({ where: { name: 'Carisma' } });
    
    const skillTech = await DefinitionSkill.findOne({ where: { name: 'Tecnologia' } });
    const skillBriga = await DefinitionSkill.findOne({ where: { name: 'Briga' } });
    const skillLabi = await DefinitionSkill.findOne({ where: { name: 'Lábia' } });
    const skillInvest = await DefinitionSkill.findOne({ where: { name: 'Investigação' } });

    const clanNosf = await DefinitionClan.findOne({ where: { name: 'Nosferatu' } });
    const clanTrem = await DefinitionClan.findOne({ where: { name: 'Tremere' } });
    const clanVent = await DefinitionClan.findOne({ where: { name: 'Ventrue' } });
    const clanBruj = await DefinitionClan.findOne({ where: { name: 'Brujah' } });

    const predSirene = await DefinitionPredator.findOne({ where: { name: 'Sirene' } });
    const predBeco = await DefinitionPredator.findOne({ where: { name: 'Beco Escuro (Alleycat)' } });
    
    // Backgrounds
    const bgRecursos = await sequelize.models.DefinitionBackground?.findOne({ where: { name: 'Recursos' } }) as any;
    const bgLacaios = await sequelize.models.DefinitionBackground?.findOne({ where: { name: 'Lacaios' } }) as any;

    // --- PACOTE 1: PROFISSÃO HACKER ---
    if (attrInt && attrDet && skillTech && skillInvest && clanNosf && clanTrem) {
      const p1 = await CreationPackage.create({
        name: 'O Fantasma Digital (Hacker)',
        description: 'Você vive nas sombras da rede, extraindo segredos e invadindo sistemas.',
        packageType: 'PROFESSION'
      });

      await CreationPackageItem.bulkCreate([
        { packageId: p1.id, itemType: 'ATTRIBUTE', referenceId: attrInt.id, amount: 2 },
        { packageId: p1.id, itemType: 'ATTRIBUTE', referenceId: attrDet.id, amount: 1 },
        { packageId: p1.id, itemType: 'SKILL', referenceId: skillTech.id, amount: 2 },
        { packageId: p1.id, itemType: 'SKILL', referenceId: skillInvest.id, amount: 1 },
        { packageId: p1.id, itemType: 'CLAN_ALLOWED', referenceId: clanNosf.id, amount: 0 },
        { packageId: p1.id, itemType: 'CLAN_ALLOWED', referenceId: clanTrem.id, amount: 0 }
      ]);
      console.log('Pacote "Hacker" criado.');
    }

    // --- PACOTE 2: PROFISSÃO SEGURANÇA / LUTADOR ---
    if (attrFor && skillBriga && clanBruj && clanNosf) {
      const p2 = await CreationPackage.create({
        name: 'Segurança de Boate / Lutador',
        description: 'Você ganha a vida resolvendo problemas na base do soco e protegendo territórios.',
        packageType: 'PROFESSION'
      });

      await CreationPackageItem.bulkCreate([
        { packageId: p2.id, itemType: 'ATTRIBUTE', referenceId: attrFor.id, amount: 2 },
        { packageId: p2.id, itemType: 'SKILL', referenceId: skillBriga.id, amount: 2 },
        { packageId: p2.id, itemType: 'CLAN_ALLOWED', referenceId: clanBruj.id, amount: 0 },
        { packageId: p2.id, itemType: 'CLAN_ALLOWED', referenceId: clanNosf.id, amount: 0 }
      ]);
      console.log('Pacote "Lutador" criado.');
    }

    // --- PACOTE 3: PREDADOR DA ELITE ---
    if (predSirene && attrCar && clanVent) {
      const p3 = await CreationPackage.create({
        name: 'A Elite Sedutora (Sirene)',
        description: 'Você não ataca em becos. Você usa seu charme em boates de luxo.',
        packageType: 'PREDATOR_CHOICE'
      });

      await CreationPackageItem.bulkCreate([
        { packageId: p3.id, itemType: 'PREDATOR', referenceId: predSirene.id, amount: 1 },
        { packageId: p3.id, itemType: 'ATTRIBUTE', referenceId: attrCar.id, amount: 1 },
        { packageId: p3.id, itemType: 'CLAN_RESTRICTION', referenceId: clanVent.id, amount: 0 }
      ]);
      console.log('Pacote Predador "Sirene" criado para Ventrue.');
    }

    // --- PACOTE 4: PREDADOR DE RUA (BECO ESCURO) ---
    if (predBeco && attrFor) {
      const p4 = await CreationPackage.create({
        name: 'O Caçador Noturno (Beco Escuro)',
        description: 'Você não tem paciência para jogos mentais. Você toma o que precisa à força nas ruas de Nocturna.',
        packageType: 'PREDATOR_CHOICE'
      });

      await CreationPackageItem.bulkCreate([
        { packageId: p4.id, itemType: 'PREDATOR', referenceId: predBeco.id, amount: 1 },
        { packageId: p4.id, itemType: 'ATTRIBUTE', referenceId: attrFor.id, amount: 1 }
        // Sem restrição de clã: Todos podem usar!
      ]);
      console.log('Pacote Predador "Beco Escuro" criado (Sem restrição).');
    }

    // --- PACOTE 5: BACKGROUND (REI DO CRIME) ---
    const p5 = await CreationPackage.create({
      name: 'Rei do Crime (Sindicalista das Sombras)',
      description: 'Você controla operações ilegais na cidade. Traz recursos sujos, mas atrai inimigos poderosos.',
      packageType: 'BACKGROUND'
    });

    const bgItems = [];
    if (bgRecursos) bgItems.push({ packageId: p5.id, itemType: 'BACKGROUND', referenceId: bgRecursos.id, amount: 3 });
    if (bgLacaios) bgItems.push({ packageId: p5.id, itemType: 'BACKGROUND', referenceId: bgLacaios.id, amount: 2 });
    
    if (bgItems.length > 0) {
      await CreationPackageItem.bulkCreate(bgItems);
    }
    console.log('Pacote Background "Rei do Crime" criado.');

    console.log('=== SEED DE PACOTES CONCLUÍDO COM SUCESSO! ===');
    process.exit(0);
  } catch (error) {
    console.error('Erro no seed de pacotes:', error);
    process.exit(1);
  }
}

seedPackages();
