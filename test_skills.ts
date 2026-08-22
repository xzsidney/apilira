import { sequelize, CharacterVampire, CharacterVampireSkill, CharacterVampireDiscipline } from './src/models';

async function run() {
  await sequelize.authenticate();
  
  const id = (await CharacterVampire.findOne({ where: { isNpc: true } }))?.id;
  if (!id) return;
  
  const character = await CharacterVampire.findByPk(id, {
    include: [ 
      { model: CharacterVampireSkill, separate: true },
      { model: CharacterVampireDiscipline, separate: true } 
    ]
  });

  const transaction = await sequelize.transaction();
  try {
    const skills = (character as any)?.CharacterVampireSkills.map((s: any) => s.toJSON());
    if (skills.length > 0) skills[0].value += 1; // increase value

    await CharacterVampireSkill.destroy({ where: { characterVampireId: id }, transaction });
    
    const mappedSkills = skills.map((s: any) => ({
      characterVampireId: id,
      definitionSkillId: s.definitionSkillId,
      value: s.value,
      specialty: s.specialty
    }));
    
    await CharacterVampireSkill.bulkCreate(mappedSkills, { transaction });
    await transaction.commit();
    console.log('Success for skills!');
  } catch (err: any) {
    await transaction.rollback();
    console.error('Error:', err.message);
  }
  process.exit(0);
}
run();
