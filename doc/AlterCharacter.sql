-- Script para adicionar os 11 novos campos textuais e pools na tabela Character

ALTER TABLE `Character`
ADD COLUMN `concept` VARCHAR(255) NULL AFTER `avatarUrl`,
ADD COLUMN `nature` VARCHAR(255) NULL AFTER `concept`,
ADD COLUMN `demeanor` VARCHAR(255) NULL AFTER `nature`,
ADD COLUMN `chronicle` VARCHAR(255) NULL AFTER `demeanor`,
ADD COLUMN `history` TEXT NULL AFTER `chronicle`,
ADD COLUMN `roleplayHints` TEXT NULL AFTER `history`,
ADD COLUMN `health` INT NOT NULL DEFAULT 7 AFTER `roleplayHints`,
ADD COLUMN `maxHealth` INT NOT NULL DEFAULT 7 AFTER `health`,
ADD COLUMN `willpower` INT NOT NULL DEFAULT 1 AFTER `maxHealth`,
ADD COLUMN `maxWillpower` INT NOT NULL DEFAULT 1 AFTER `willpower`,
ADD COLUMN `energy` INT NOT NULL DEFAULT 1 AFTER `maxWillpower`,
ADD COLUMN `maxEnergy` INT NOT NULL DEFAULT 1 AFTER `energy`;
