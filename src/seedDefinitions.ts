import fs from 'fs';
import path from 'path';
import { sequelize } from './models';
import { AttributeDefinition } from './models/AttributeDefinition';
import { SkillDefinition } from './models/SkillDefinition';
import { CharacterAttribute } from './models/CharacterAttribute';
import { CharacterSkill } from './models/CharacterSkill';

async function seed() {
  await sequelize.authenticate();
  console.log('Conectado ao banco de dados!');

  // Atualiza as tabelas adicionando a nova coluna gameStyle
  await sequelize.sync({ alter: true });
  console.log('Tabelas sincronizadas (alteradas se necessário).');

  // Apaga vínculos existentes para evitar erro de Foreign Key
  await CharacterAttribute.destroy({ where: {} });
  await CharacterSkill.destroy({ where: {} });

  // Apaga definições antigas
  await AttributeDefinition.destroy({ where: {} });
  await SkillDefinition.destroy({ where: {} });
  console.log('Tabelas de definição antigas foram limpas.');

  // Insere Atributos
  const attrData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/atributos.json'), 'utf-8'));
  for (const attr of attrData.attribute_definitions) {
    await AttributeDefinition.create({
      name: attr.nome,
      type: attr.tipo.toUpperCase(), // ex: 'FÍSICO'
      description: attr.descricao,
      gameStyle: attr.gameStyle,
    });
  }
  console.log(`Foram inseridos ${attrData.attribute_definitions.length} atributos com sucesso.`);

  // Insere Habilidades
  const skillData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/HABILIDADES.json'), 'utf-8'));
  for (const skill of skillData.skill_definitions) {
    await SkillDefinition.create({
      name: skill.nome,
      type: skill.tipo.toUpperCase(), // ex: 'FÍSICO'
      description: skill.descricao,
      gameStyle: skill.gameStyle,
    });
  }
  console.log(`Foram inseridas ${skillData.skill_definitions.length} habilidades com sucesso.`);

  // Insere Predadores
  const predData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/Predador.json'), 'utf-8'));
  const { VampirePredatorDefinition } = require('./models');
  // Apaga predadores antigos se quiser limpar
  await VampirePredatorDefinition.destroy({ where: {} });
  for (const pred of predData.predator_definitions) {
    await VampirePredatorDefinition.create({
      id: pred.id,
      nome: pred.nome,
      descricao: pred.descricao,
      restricao_clas: pred.restricao_clas,
      reserva_dados: pred.reserva_dados,
      especializacoes_opcoes: pred.especializacoes_opcoes,
      disciplinas_bonus: pred.disciplinas_bonus,
      modificador_humanidade: pred.modificador_humanidade,
      vantagens_ganhas: pred.vantagens_ganhas,
      defeitos_ganhos: pred.defeitos_ganhos,
    });
  }
  console.log(`Foram inseridos ${predData.predator_definitions.length} predadores com sucesso.`);

  // Insere Ressonâncias
  const resData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/ressonancias_vampiricas.json'), 'utf-8'));
  const { VampireResonanceDefinition } = require('./models');
  await VampireResonanceDefinition.destroy({ where: {} });
  for (const res of resData.ressonancias_vampiricas) {
    await VampireResonanceDefinition.create({
      id: res.id,
      nome: res.nome,
      humor_associado: res.humor_associado,
      descricao: res.descricao,
      disciplinas_amplificadas: res.disciplinas_amplificadas,
      exemplos_presas: res.exemplos_presas,
    });
  }
  console.log(`Foram inseridas ${resData.ressonancias_vampiricas.length} ressonâncias com sucesso.`);

  console.log('Migração finalizada com sucesso!');
  process.exit(0);
}

seed().catch(console.error);
