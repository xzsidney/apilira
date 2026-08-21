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
    const attributes = character?.CharacterVampireAttributes.map((a: any) => a.toJSON());
    
    await CharacterVampireAttribute.destroy({ where: { characterVampireId: id }, transaction });
    
    // Simulate what the frontend sends:
    const mapped = attributes.map((a: any) => ({ ...a, characterVampireId: id }));
    // Try to bulkCreate
    await CharacterVampireAttribute.bulkCreate(mapped, { transaction });
    await transaction.commit();
    console.log('Success!');
  } catch (err) {
    await transaction.rollback();
    console.error('Error:', err);
  }
  process.exit(0);
}
run();
