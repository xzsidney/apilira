import { sequelize, CreationPackage, CreationPackageItem, DefinitionBackground, DefinitionMeritFlaw } from './src/models';
import { v4 as uuidv4 } from 'uuid';

const backgrounds = [
  { name: 'Herdeiro Corporativo', desc: 'Você tem acesso a fundos de investimento e uma mansão segura.', type: 'BACKGROUND_BUNDLE' },
  { name: 'Criminoso Procurado', desc: 'A polícia está atrás de você, mas você tem contatos no submundo.', type: 'BACKGROUND_BUNDLE' },
  { name: 'Sobrevivente das Ruas', desc: 'Acostumado a dormir em becos. Sem recursos, mas sabe se esconder.', type: 'BACKGROUND_BUNDLE' },
  { name: 'Influenciador Digital', desc: 'Fama e seguidores, mas nenhum segredo está seguro.', type: 'BACKGROUND_BUNDLE' },
];

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Seeding Backgrounds...");
    
    // We don't necessarily need to link specific points right now if we just want them to show up,
    // but a real implementation would link to DefinitionBackground / DefinitionMeritFlaw.
    // For now, let's just create the packages so they appear in the UI.

    for (const bg of backgrounds) {
      await CreationPackage.create({
        id: uuidv4(),
        name: bg.name,
        description: bg.desc,
        packageType: bg.type
      });
    }
    
    console.log(`Seeded backgrounds successfully!`);
    
  } catch(e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
}

run();
