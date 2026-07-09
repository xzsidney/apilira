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

  // Atualiza as tabelas adicionando colunas faltantes
  await sequelize.sync({ alter: true });
  console.log('Tabelas sincronizadas (alteradas se necessário).');

  // Insere Atributos (Sem deletar)
  const attrData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/atributos.json'), 'utf-8'));
  for (const attr of attrData.attribute_definitions) {
    const [record, created] = await AttributeDefinition.findOrCreate({
      where: { name: attr.nome, type: attr.tipo.toUpperCase() },
      defaults: {
        description: attr.descricao,
        gameStyle: attr.gameStyle,
      }
    });
    if (!created) {
      await record.update({
        description: attr.descricao,
        gameStyle: attr.gameStyle,
      });
    }
  }
  console.log(`Foram atualizados/inseridos ${attrData.attribute_definitions.length} atributos com sucesso.`);

  // Insere Habilidades (Sem deletar)
  const skillData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/HABILIDADES.json'), 'utf-8'));
  for (const skill of skillData.skill_definitions) {
    const [record, created] = await SkillDefinition.findOrCreate({
      where: { name: skill.nome, type: skill.tipo.toUpperCase() },
      defaults: {
        description: skill.descricao,
        gameStyle: skill.gameStyle,
      }
    });
    if (!created) {
      await record.update({
        description: skill.descricao,
        gameStyle: skill.gameStyle,
      });
    }
  }
  console.log(`Foram atualizadas/inseridas ${skillData.skill_definitions.length} habilidades com sucesso.`);

  // Insere Predadores (Sem deletar)
  const predData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/Predador.json'), 'utf-8'));
  const { VampirePredatorDefinition } = require('./models');
  for (const pred of predData.predator_definitions) {
    await VampirePredatorDefinition.upsert({
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

  // Insere Ressonâncias (Sem deletar)
  const resData = JSON.parse(fs.readFileSync(path.join(__dirname, '../doc/ressonancias_vampiricas.json'), 'utf-8'));
  const { VampireResonanceDefinition } = require('./models');
  for (const res of resData.ressonancias_vampiricas) {
    await VampireResonanceDefinition.upsert({
      id: res.id,
      nome: res.nome,
      humor_associado: res.humor_associado,
      descricao: res.descricao,
      disciplinas_amplificadas: res.disciplinas_amplificadas,
      exemplos_presas: res.exemplos_presas,
    });
  }
  console.log(`Foram atualizadas/inseridas ${resData.ressonancias_vampiricas.length} ressonâncias com sucesso.`);

  console.log('Migração finalizada com sucesso!');
  process.exit(0);
}

seed().catch(console.error);
