/*
  Warnings:

  - The primary key for the `characterattribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `appearance` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `charisma` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `composure` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `dexterity` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `intelligence` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `manipulation` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `perception` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `resolve` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `stamina` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `wits` on the `characterattribute` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `characteritem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `charactermeritflaw` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `charactermeritflaw` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `characterpower` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `characterpower` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `characterpower` table. All the data in the column will be lost.
  - The primary key for the `characterskill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `academics` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `alertness` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `animalKen` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `athletics` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `awareness` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `brawl` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `craft` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `dodge` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `drive` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `etiquette` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `expression` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `finance` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `firearms` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `insight` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `intimidation` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `investigation` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `larceny` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `leadership` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `medicine` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `melee` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `occult` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `performance` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `persuasion` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `politics` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `science` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `stealth` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `streetwise` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `subterfuge` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `survival` on the `characterskill` table. All the data in the column will be lost.
  - You are about to drop the column `technology` on the `characterskill` table. All the data in the column will be lost.
  - The primary key for the `characterstatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `arete` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `despair` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `harano` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `hauglosk` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `humanity` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `hunger` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `paradox` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `quintessence` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `rage` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `redemption` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `renownGlory` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `renownHonor` on the `characterstatus` table. All the data in the column will be lost.
  - You are about to drop the column `renownWisdom` on the `characterstatus` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[characterId,attributeId]` on the table `CharacterAttribute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId,itemId]` on the table `CharacterItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId,meritFlawId]` on the table `CharacterMeritFlaw` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId,powerDefinitionId]` on the table `CharacterPower` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId,skillId]` on the table `CharacterSkill` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[characterId,statusId]` on the table `CharacterStatus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attributeId` to the `CharacterAttribute` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `CharacterAttribute` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `itemId` to the `CharacterItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meritFlawId` to the `CharacterMeritFlaw` table without a default value. This is not possible if the table is not empty.
  - Added the required column `powerDefinitionId` to the `CharacterPower` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `CharacterSkill` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `skillId` to the `CharacterSkill` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `CharacterStatus` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `statusId` to the `CharacterStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `character` ADD COLUMN `isNpc` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isTemplate` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `characterattribute` DROP PRIMARY KEY,
    DROP COLUMN `appearance`,
    DROP COLUMN `charisma`,
    DROP COLUMN `composure`,
    DROP COLUMN `dexterity`,
    DROP COLUMN `intelligence`,
    DROP COLUMN `manipulation`,
    DROP COLUMN `perception`,
    DROP COLUMN `resolve`,
    DROP COLUMN `stamina`,
    DROP COLUMN `strength`,
    DROP COLUMN `wits`,
    ADD COLUMN `attributeId` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `specialty` VARCHAR(191) NULL,
    ADD COLUMN `value` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `characteritem` DROP COLUMN `name`,
    ADD COLUMN `itemId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `charactermeritflaw` DROP COLUMN `name`,
    DROP COLUMN `type`,
    ADD COLUMN `meritFlawId` VARCHAR(191) NOT NULL,
    MODIFY `points` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `characterpower` DROP COLUMN `description`,
    DROP COLUMN `name`,
    DROP COLUMN `type`,
    ADD COLUMN `powerDefinitionId` VARCHAR(191) NOT NULL,
    MODIFY `level` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `characterskill` DROP PRIMARY KEY,
    DROP COLUMN `academics`,
    DROP COLUMN `alertness`,
    DROP COLUMN `animalKen`,
    DROP COLUMN `athletics`,
    DROP COLUMN `awareness`,
    DROP COLUMN `brawl`,
    DROP COLUMN `craft`,
    DROP COLUMN `dodge`,
    DROP COLUMN `drive`,
    DROP COLUMN `etiquette`,
    DROP COLUMN `expression`,
    DROP COLUMN `finance`,
    DROP COLUMN `firearms`,
    DROP COLUMN `insight`,
    DROP COLUMN `intimidation`,
    DROP COLUMN `investigation`,
    DROP COLUMN `larceny`,
    DROP COLUMN `leadership`,
    DROP COLUMN `medicine`,
    DROP COLUMN `melee`,
    DROP COLUMN `occult`,
    DROP COLUMN `performance`,
    DROP COLUMN `persuasion`,
    DROP COLUMN `politics`,
    DROP COLUMN `science`,
    DROP COLUMN `stealth`,
    DROP COLUMN `streetwise`,
    DROP COLUMN `subterfuge`,
    DROP COLUMN `survival`,
    DROP COLUMN `technology`,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `skillId` VARCHAR(191) NOT NULL,
    ADD COLUMN `specialty` VARCHAR(191) NULL,
    ADD COLUMN `value` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `characterstatus` DROP PRIMARY KEY,
    DROP COLUMN `arete`,
    DROP COLUMN `despair`,
    DROP COLUMN `harano`,
    DROP COLUMN `hauglosk`,
    DROP COLUMN `humanity`,
    DROP COLUMN `hunger`,
    DROP COLUMN `paradox`,
    DROP COLUMN `quintessence`,
    DROP COLUMN `rage`,
    DROP COLUMN `redemption`,
    DROP COLUMN `renownGlory`,
    DROP COLUMN `renownHonor`,
    DROP COLUMN `renownWisdom`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `statusId` VARCHAR(191) NOT NULL,
    ADD COLUMN `value` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('ADMIN', 'MESTRE', 'JOGADOR') NOT NULL DEFAULT 'JOGADOR';

-- CreateTable
CREATE TABLE `AttributeDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AttributeDefinition_name_type_key`(`name`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SkillDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SkillDefinition_name_type_key`(`name`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gameStyle` VARCHAR(191) NOT NULL,
    `maxValue` INTEGER NOT NULL,
    `defaultInitialValue` INTEGER NOT NULL DEFAULT 0,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `StatusDefinition_name_gameStyle_key`(`name`, `gameStyle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PowerDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gameStyle` VARCHAR(191) NOT NULL,
    `type` ENUM('DISCIPLINE', 'GIFT', 'SPHERE', 'EDGE') NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PowerDefinition_name_gameStyle_key`(`name`, `gameStyle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PowerLevelDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `powerDefinitionId` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `system` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PowerLevelDefinition_powerDefinitionId_level_name_key`(`powerDefinitionId`, `level`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterPowerSelection` (
    `id` VARCHAR(191) NOT NULL,
    `characterPowerId` VARCHAR(191) NOT NULL,
    `powerLevelDefinitionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CharacterPowerSelection_characterPowerId_powerLevelDefinitio_key`(`characterPowerId`, `powerLevelDefinitionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MeritFlawDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('MERIT', 'FLAW') NOT NULL,
    `gameStyle` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `MeritFlawDefinition_name_gameStyle_type_key`(`name`, `gameStyle`, `type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `value` DOUBLE NOT NULL DEFAULT 0.0,
    `requirements` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ItemDefinition_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Region` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `description` TEXT NULL,
    `dangerLevel` INTEGER NOT NULL DEFAULT 1,
    `parentRegionId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Population` (
    `id` VARCHAR(191) NOT NULL,
    `regionId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gameStyle` VARCHAR(191) NOT NULL,
    `powerLevel` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BackgroundDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gameStyle` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BackgroundDefinition_name_gameStyle_key`(`name`, `gameStyle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterBackground` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `backgroundId` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `CharacterBackground_characterId_backgroundId_key`(`characterId`, `backgroundId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HavenDefinition` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `price` DOUBLE NOT NULL DEFAULT 0.0,
    `securityLevel` INTEGER NOT NULL DEFAULT 1,
    `minionCapacity` INTEGER NOT NULL DEFAULT 0,
    `allyCapacity` INTEGER NOT NULL DEFAULT 0,
    `requiredBackgroundId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterHaven` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `havenDefinitionId` VARCHAR(191) NOT NULL,
    `regionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `CharacterAttribute_characterId_attributeId_key` ON `CharacterAttribute`(`characterId`, `attributeId`);

-- CreateIndex
CREATE UNIQUE INDEX `CharacterItem_characterId_itemId_key` ON `CharacterItem`(`characterId`, `itemId`);

-- CreateIndex
CREATE UNIQUE INDEX `CharacterMeritFlaw_characterId_meritFlawId_key` ON `CharacterMeritFlaw`(`characterId`, `meritFlawId`);

-- CreateIndex
CREATE UNIQUE INDEX `CharacterPower_characterId_powerDefinitionId_key` ON `CharacterPower`(`characterId`, `powerDefinitionId`);

-- CreateIndex
CREATE UNIQUE INDEX `CharacterSkill_characterId_skillId_key` ON `CharacterSkill`(`characterId`, `skillId`);

-- CreateIndex
CREATE UNIQUE INDEX `CharacterStatus_characterId_statusId_key` ON `CharacterStatus`(`characterId`, `statusId`);

-- AddForeignKey
ALTER TABLE `CharacterAttribute` ADD CONSTRAINT `CharacterAttribute_attributeId_fkey` FOREIGN KEY (`attributeId`) REFERENCES `AttributeDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterSkill` ADD CONSTRAINT `CharacterSkill_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `SkillDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterStatus` ADD CONSTRAINT `CharacterStatus_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `StatusDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PowerLevelDefinition` ADD CONSTRAINT `PowerLevelDefinition_powerDefinitionId_fkey` FOREIGN KEY (`powerDefinitionId`) REFERENCES `PowerDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterPower` ADD CONSTRAINT `CharacterPower_powerDefinitionId_fkey` FOREIGN KEY (`powerDefinitionId`) REFERENCES `PowerDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterPowerSelection` ADD CONSTRAINT `CharacterPowerSelection_characterPowerId_fkey` FOREIGN KEY (`characterPowerId`) REFERENCES `CharacterPower`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterPowerSelection` ADD CONSTRAINT `CharacterPowerSelection_powerLevelDefinitionId_fkey` FOREIGN KEY (`powerLevelDefinitionId`) REFERENCES `PowerLevelDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterMeritFlaw` ADD CONSTRAINT `CharacterMeritFlaw_meritFlawId_fkey` FOREIGN KEY (`meritFlawId`) REFERENCES `MeritFlawDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterItem` ADD CONSTRAINT `CharacterItem_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `ItemDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Region` ADD CONSTRAINT `Region_parentRegionId_fkey` FOREIGN KEY (`parentRegionId`) REFERENCES `Region`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Population` ADD CONSTRAINT `Population_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterBackground` ADD CONSTRAINT `CharacterBackground_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterBackground` ADD CONSTRAINT `CharacterBackground_backgroundId_fkey` FOREIGN KEY (`backgroundId`) REFERENCES `BackgroundDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterHaven` ADD CONSTRAINT `CharacterHaven_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterHaven` ADD CONSTRAINT `CharacterHaven_havenDefinitionId_fkey` FOREIGN KEY (`havenDefinitionId`) REFERENCES `HavenDefinition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterHaven` ADD CONSTRAINT `CharacterHaven_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `Region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
