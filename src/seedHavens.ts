import sequelize from './config/db';
import { CharacterVampire, CharacterHaven, DefinitionLocation } from './models';

async function seedHavens() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');

    const characters = await CharacterVampire.findAll();
    console.log(`Encontrados ${characters.length} personagens.`);

    let defaultLoc = await DefinitionLocation.findOne({ where: { name: 'Belenzinho', level: 3 } });
    if (!defaultLoc) {
      defaultLoc = await DefinitionLocation.findOne({ where: { level: 3 } });
    }

    if (!defaultLoc) {
      console.error('Nenhum distrito de level 3 encontrado!');
      process.exit(1);
    }

    console.log(`Distrito padrão para refúgio: ${defaultLoc.name} (${defaultLoc.id})`);

    for (const char of characters) {
      const existingHaven = await CharacterHaven.findOne({ where: { characterId: char.id } });
      if (!existingHaven) {
        await CharacterHaven.create({
          characterId: char.id,
          locationId: defaultLoc.id,
          name: 'Refúgio Pessoal Seguro',
          securityLevel: 1,
          luxuryLevel: 1
        } as any);
        console.log(`✅ Refúgio criado para o personagem: ${char.name} (${char.id})`);
      } else {
        console.log(`ℹ️ Personagem ${char.name} já possui refúgio.`);
      }

      if (!char.currentLocationId) {
        char.currentLocationId = defaultLoc.id;
        char.isRestingInHaven = true;
        await char.save();
      }
    }

    console.log('🎉 Todos os personagens possuem refúgio registrado!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao popular refúgios:', error);
    process.exit(1);
  }
}

seedHavens();
