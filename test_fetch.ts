import { sequelize, CharacterVampire, DefinitionClan, DefinitionPredator, DefinitionResonance, DefinitionBloodPotency, CharacterVampireAttribute, DefinitionAttribute, CharacterVampireSkill, DefinitionSkill, CharacterVampireDiscipline, DefinitionDiscipline, CharacterVampirePower, DefinitionDisciplinePower, CharacterVampireBackground, DefinitionBackground, CharacterVampireMeritFlaw, DefinitionMeritFlaw } from './src/models';
async function run() {
  await sequelize.authenticate();
  const id = (await CharacterVampire.findOne({ where: { isNpc: true } }))?.id;
  if (!id) return;
  try {
    const character = await CharacterVampire.findByPk(id, {
      include: [
        { model: DefinitionClan, attributes: ['name', 'weakness'] },
        { model: DefinitionPredator, attributes: ['name'] },
        { model: DefinitionResonance, attributes: ['name'] },
        { model: DefinitionBloodPotency, attributes: ['level', 'bloodSurge', 'mendAmount'] },
        { model: CharacterVampireAttribute, include: [{ model: DefinitionAttribute, attributes: ['name', 'type'] }] },
        { model: CharacterVampireSkill, include: [{ model: DefinitionSkill, attributes: ['name', 'type'] }] },
        { model: CharacterVampireDiscipline, include: [{ model: DefinitionDiscipline, attributes: ['name'] }] },
        { model: CharacterVampirePower, include: [{ model: DefinitionDisciplinePower, attributes: ['name', 'level'] }] },
        { model: CharacterVampireBackground, include: [{ model: DefinitionBackground, attributes: ['name', 'description'] }] },
        { model: CharacterVampireMeritFlaw, include: [{ model: DefinitionMeritFlaw, attributes: ['name', 'description', 'type'] }] },
      ]
    });
    console.log('Success!', character?.name);
  } catch (err) {
    console.error('Error fetching:', err);
  }
  process.exit(0);
}
run();
