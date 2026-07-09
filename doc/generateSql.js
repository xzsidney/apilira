const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dir = __dirname;

const clansData = JSON.parse(fs.readFileSync(path.join(dir, 'cla.json'), 'utf8'));
const tribesData = JSON.parse(fs.readFileSync(path.join(dir, 'Tribos de Lobisomem.json'), 'utf8'));
const traditionsData = JSON.parse(fs.readFileSync(path.join(dir, 'Tradições Místicas de Mago A Ascensão.json'), 'utf8'));
const creedsData = JSON.parse(fs.readFileSync(path.join(dir, 'caçadores.json'), 'utf8'));

let sql = `
-- Script de Criação e População das Tabelas de Fichas Místicas Separadas

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- ==========================================
-- 1. Criação das Tabelas
-- ==========================================

CREATE TABLE IF NOT EXISTS \`VampireClaDefinition\` (
  \`id\` varchar(36) NOT NULL,
  \`name\` varchar(255) NOT NULL,
  \`nickname\` varchar(255) NOT NULL,
  \`description\` text NOT NULL,
  \`sectAlignment\` varchar(255) NOT NULL,
  \`mainDisciplines\` json NOT NULL,
  \`weaknessName\` varchar(255) NOT NULL,
  \`weaknessDescription\` text NOT NULL,
  \`weaknessExamples\` json DEFAULT NULL,
  \`createdAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  \`updatedAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS \`WerewolfTribeDefinition\` (
  \`id\` varchar(36) NOT NULL,
  \`name\` varchar(255) NOT NULL,
  \`englishName\` varchar(255) NOT NULL,
  \`classicName\` varchar(255) DEFAULT NULL,
  \`description\` text NOT NULL,
  \`nationAlignment\` varchar(255) NOT NULL,
  \`mainGifts\` json NOT NULL,
  \`psychologicalFlawName\` varchar(255) NOT NULL,
  \`psychologicalFlawDescription\` text NOT NULL,
  \`createdAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  \`updatedAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS \`MageTraditionDefinition\` (
  \`id\` varchar(36) NOT NULL,
  \`name\` varchar(255) NOT NULL,
  \`englishName\` varchar(255) NOT NULL,
  \`description\` text NOT NULL,
  \`affinitySphere\` varchar(255) NOT NULL,
  \`focusInstruments\` json NOT NULL,
  \`paradigmFlawName\` varchar(255) NOT NULL,
  \`paradigmFlawDescription\` text NOT NULL,
  \`createdAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  \`updatedAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS \`HunterCreedDefinition\` (
  \`id\` varchar(36) NOT NULL,
  \`name\` varchar(255) NOT NULL,
  \`englishName\` varchar(255) NOT NULL,
  \`description\` text NOT NULL,
  \`mainEdges\` json NOT NULL,
  \`afflictionTriggerName\` varchar(255) NOT NULL,
  \`afflictionTriggerDescription\` text NOT NULL,
  \`createdAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  \`updatedAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================
-- 2. Alteração na Tabela Character
-- ==========================================

ALTER TABLE \`Character\`
ADD COLUMN \`vampireClaId\` varchar(36) NULL AFTER \`avatarUrl\`,
ADD COLUMN \`werewolfTribeId\` varchar(36) NULL AFTER \`vampireClaId\`,
ADD COLUMN \`mageTraditionId\` varchar(36) NULL AFTER \`werewolfTribeId\`,
ADD COLUMN \`hunterCreedId\` varchar(36) NULL AFTER \`mageTraditionId\`;

ALTER TABLE \`Character\`
ADD CONSTRAINT \`fk_character_vampire_cla\` FOREIGN KEY (\`vampireClaId\`) REFERENCES \`VampireClaDefinition\` (\`id\`) ON DELETE SET NULL,
ADD CONSTRAINT \`fk_character_werewolf_tribe\` FOREIGN KEY (\`werewolfTribeId\`) REFERENCES \`WerewolfTribeDefinition\` (\`id\`) ON DELETE SET NULL,
ADD CONSTRAINT \`fk_character_mage_tradition\` FOREIGN KEY (\`mageTraditionId\`) REFERENCES \`MageTraditionDefinition\` (\`id\`) ON DELETE SET NULL,
ADD CONSTRAINT \`fk_character_hunter_creed\` FOREIGN KEY (\`hunterCreedId\`) REFERENCES \`HunterCreedDefinition\` (\`id\`) ON DELETE SET NULL;

-- ==========================================
-- 3. Inserção de Dados (Seeding)
-- ==========================================

`;

function escapeStr(str) {
  if (!str) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
}

// Vampires
sql += "-- Clãs de Vampiro\n";
clansData.clas_vampiricos.forEach(c => {
  const ex = c.fraqueza.exemplos_restricao ? "'" + JSON.stringify(c.fraqueza.exemplos_restricao).replace(/'/g, "''") + "'" : 'NULL';
  sql += `INSERT INTO \`VampireClaDefinition\` (\`id\`, \`name\`, \`nickname\`, \`description\`, \`sectAlignment\`, \`mainDisciplines\`, \`weaknessName\`, \`weaknessDescription\`, \`weaknessExamples\`) VALUES (UUID(), ${escapeStr(c.nome)}, ${escapeStr(c.apelido)}, ${escapeStr(c.descricao)}, ${escapeStr(c.alinhamento_seita)}, '${JSON.stringify(c.disciplinas_principais).replace(/'/g, "''")}', ${escapeStr(c.fraqueza.nome)}, ${escapeStr(c.fraqueza.descricao)}, ${ex});\n`;
});

// Werewolves
sql += "\n-- Tribos de Lobisomem\n";
tribesData.tribos_garou.forEach(t => {
  sql += `INSERT INTO \`WerewolfTribeDefinition\` (\`id\`, \`name\`, \`englishName\`, \`classicName\`, \`description\`, \`nationAlignment\`, \`mainGifts\`, \`psychologicalFlawName\`, \`psychologicalFlawDescription\`) VALUES (UUID(), ${escapeStr(t.nome)}, ${escapeStr(t.nome_ingles)}, ${escapeStr(t.nome_classico)}, ${escapeStr(t.descricao)}, ${escapeStr(t.alinhamento_nacao)}, '${JSON.stringify(t.dons_principais).replace(/'/g, "''")}', ${escapeStr(t.falha_psicologica.nome)}, ${escapeStr(t.falha_psicologica.descricao)});\n`;
});

// Mages
sql += "\n-- Tradições de Mago\n";
traditionsData.tradicoes_misticas.forEach(t => {
  sql += `INSERT INTO \`MageTraditionDefinition\` (\`id\`, \`name\`, \`englishName\`, \`description\`, \`affinitySphere\`, \`focusInstruments\`, \`paradigmFlawName\`, \`paradigmFlawDescription\`) VALUES (UUID(), ${escapeStr(t.nome)}, ${escapeStr(t.nome_ingles)}, ${escapeStr(t.descricao)}, ${escapeStr(t.esfera_afinidade)}, '${JSON.stringify(t.foco_instrumentos).replace(/'/g, "''")}', ${escapeStr(t.falha_paradigma.nome)}, ${escapeStr(t.falha_paradigma.descricao)});\n`;
});

// Hunters
sql += "\n-- Credos de Caçador\n";
creedsData.credos_cacador.forEach(c => {
  sql += `INSERT INTO \`HunterCreedDefinition\` (\`id\`, \`name\`, \`englishName\`, \`description\`, \`mainEdges\`, \`afflictionTriggerName\`, \`afflictionTriggerDescription\`) VALUES (UUID(), ${escapeStr(c.nome)}, ${escapeStr(c.nome_ingles)}, ${escapeStr(c.descricao)}, '${JSON.stringify(c.trunfos_principais).replace(/'/g, "''")}', ${escapeStr(c.gatilho_aflicao.nome)}, ${escapeStr(c.gatilho_aflicao.descricao)});\n`;
});

sql += "\nCOMMIT;\n";

fs.writeFileSync(path.join(dir, 'Factions.sql'), sql);
console.log('Script SQL gerado com sucesso em Factions.sql!');
