import { sequelize, CharacterVampire, CharacterVampireAttribute } from './src/models';

async function run() {
  await sequelize.authenticate();
  
  const id = (await CharacterVampire.findOne({ where: { isNpc: true } }))?.id;
  if (!id) return;
  
  const character = await CharacterVampire.findByPk(id, {
    include: [ { model: CharacterVampireAttribute, separate: true } ]
  });

  const transaction = await sequelize.transaction();
  try {
    const attributes = (character as any)?.CharacterVampireAttributes.map((a: any) => a.toJSON());
    
    await CharacterVampireAttribute.destroy({ where: { characterVampireId: id }, transaction });
    
    const mapped = attributes.map((a: any) => ({
      // NO ID HERE!
      characterVampireId: id,
      definitionAttributeId: a.definitionAttributeId,
      value: a.value
    }));
    
    await CharacterVampireAttribute.bulkCreate(mapped, { transaction });
    await transaction.commit();
    console.log('Success!');
  } catch (err: any) {
    await transaction.rollback();
    console.error('Error:', err.message);
  }
  process.exit(0);
}
run();
