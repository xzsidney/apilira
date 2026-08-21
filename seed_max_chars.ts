import { sequelize, DefinitionClan, DefinitionPredator, DefinitionResonance, DefinitionBloodPotency, DefinitionAttribute, DefinitionSkill, DefinitionDiscipline, DefinitionDisciplinePower, DefinitionMeritFlaw, DefinitionBackground, CharacterVampire, CharacterVampireAttribute, CharacterVampireSkill, CharacterVampireDiscipline, CharacterVampirePower, CharacterVampireMeritFlaw, CharacterVampireBackground, User } from './src/models';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  await sequelize.authenticate();
  const transaction = await sequelize.transaction();
  try {
    const user = await User.findOne();
    const userId = user ? user.id : '0';
    const clans = await DefinitionClan.findAll();
    const predators = await DefinitionPredator.findAll();
    const resonances = await DefinitionResonance.findAll();
    const bPots = await DefinitionBloodPotency.findAll();
    const attributes = await DefinitionAttribute.findAll();
    const skills = await DefinitionSkill.findAll();
    const disciplines = await DefinitionDiscipline.findAll();
    const allPowers = await DefinitionDisciplinePower.findAll();
    const mfs = await DefinitionMeritFlaw.findAll();
    const bgs = await DefinitionBackground.findAll();

    for (let i = 0; i < clans.length; i++) {
      const clan = clans[i];
      const pred = predators[i % predators.length];
      const res = resonances[0];
      const bp = bPots.find(b => b.level === 1) || bPots[0];

      const cId = uuidv4();
      await CharacterVampire.create({
        id: cId,
        userId: userId,
        isNpc: true,
        clanId: clan.id,
        predatorId: pred?.id,
        resonanceId: res?.id,
        bloodPotencyId: bp?.id,
        name: `Mestre ${clan.name}`,
        concept: `Um ancião intocável do clã ${clan.name}.`,
        chronicle: 'Noites de Teste',
        ambition: 'Testar os limites do sistema.',
        sire: 'Caim',
        desire: 'Dominar tudo.',
        generation: 4,
        hunger: 1,
        humanity: 10,
        stains: 0,
        healthMax: 8,
        healthDamageSuperficial: 0,
        healthDamageAggravated: 0,
        willpowerMax: 10,
        willpowerDamageSuperficial: 0,
        willpowerDamageAggravated: 0,
        history: `Este é um personagem criado artificialmente para estressar os limites da ficha.\nPertence ao clã ${clan.name} e domina todas as artes e maldições possíveis. Nascido nas noites mais antigas.`
      }, { transaction });

      // Attributes
      for (const a of attributes) {
        await CharacterVampireAttribute.create({ id: uuidv4(), characterVampireId: cId, definitionAttributeId: a.id, value: 5 }, { transaction });
      }

      // Skills
      for (const s of skills) {
        await CharacterVampireSkill.create({ id: uuidv4(), characterVampireId: cId, definitionSkillId: s.id, value: 5 }, { transaction });
      }

      // Disciplines & Powers
      for (const d of disciplines) {
        await CharacterVampireDiscipline.create({ id: uuidv4(), characterVampireId: cId, definitionDisciplineId: d.id, value: 5 }, { transaction });
        const powers = allPowers.filter(p => p.definitionDisciplineId === d.id);
        for (const p of powers) {
          await CharacterVampirePower.create({ id: uuidv4(), characterVampireId: cId, definitionDisciplinePowerId: p.id }, { transaction });
        }
      }

      // MeritFlaws
      for (const mf of mfs) {
        await CharacterVampireMeritFlaw.create({ id: uuidv4(), characterVampireId: cId, definitionMeritFlawId: mf.id, value: 5 }, { transaction });
      }

      // Backgrounds
      for (const bg of bgs) {
        await CharacterVampireBackground.create({ id: uuidv4(), characterVampireId: cId, definitionBackgroundId: bg.id, value: 5 }, { transaction });
      }
    }

    await transaction.commit();
    console.log(`Successfully created ${clans.length} maxed out characters!`);
    process.exit(0);
  } catch (err) {
    await transaction.rollback();
    console.error(err);
    process.exit(1);
  }
}

run();
