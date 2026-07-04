-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Character` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `gameStyle` ENUM('VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER') NOT NULL,
    `experienceTotal` INTEGER NOT NULL DEFAULT 0,
    `experienceSpent` INTEGER NOT NULL DEFAULT 0,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterAttribute` (
    `characterId` VARCHAR(191) NOT NULL,
    `strength` INTEGER NOT NULL DEFAULT 1,
    `dexterity` INTEGER NOT NULL DEFAULT 1,
    `stamina` INTEGER NOT NULL DEFAULT 1,
    `charisma` INTEGER NOT NULL DEFAULT 1,
    `manipulation` INTEGER NOT NULL DEFAULT 1,
    `composure` INTEGER NOT NULL DEFAULT 1,
    `intelligence` INTEGER NOT NULL DEFAULT 1,
    `wits` INTEGER NOT NULL DEFAULT 1,
    `resolve` INTEGER NOT NULL DEFAULT 1,
    `appearance` INTEGER NULL,
    `perception` INTEGER NULL,

    PRIMARY KEY (`characterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterSkill` (
    `characterId` VARCHAR(191) NOT NULL,
    `melee` INTEGER NOT NULL DEFAULT 0,
    `firearms` INTEGER NOT NULL DEFAULT 0,
    `athletics` INTEGER NOT NULL DEFAULT 0,
    `brawl` INTEGER NOT NULL DEFAULT 0,
    `drive` INTEGER NOT NULL DEFAULT 0,
    `stealth` INTEGER NOT NULL DEFAULT 0,
    `larceny` INTEGER NOT NULL DEFAULT 0,
    `craft` INTEGER NOT NULL DEFAULT 0,
    `survival` INTEGER NOT NULL DEFAULT 0,
    `animalKen` INTEGER NOT NULL DEFAULT 0,
    `etiquette` INTEGER NOT NULL DEFAULT 0,
    `intimidation` INTEGER NOT NULL DEFAULT 0,
    `leadership` INTEGER NOT NULL DEFAULT 0,
    `streetwise` INTEGER NOT NULL DEFAULT 0,
    `performance` INTEGER NOT NULL DEFAULT 0,
    `persuasion` INTEGER NOT NULL DEFAULT 0,
    `insight` INTEGER NOT NULL DEFAULT 0,
    `subterfuge` INTEGER NOT NULL DEFAULT 0,
    `science` INTEGER NOT NULL DEFAULT 0,
    `academics` INTEGER NOT NULL DEFAULT 0,
    `finance` INTEGER NOT NULL DEFAULT 0,
    `investigation` INTEGER NOT NULL DEFAULT 0,
    `medicine` INTEGER NOT NULL DEFAULT 0,
    `occult` INTEGER NOT NULL DEFAULT 0,
    `awareness` INTEGER NOT NULL DEFAULT 0,
    `politics` INTEGER NOT NULL DEFAULT 0,
    `technology` INTEGER NOT NULL DEFAULT 0,
    `expression` INTEGER NOT NULL DEFAULT 0,
    `alertness` INTEGER NOT NULL DEFAULT 0,
    `dodge` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`characterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterStatus` (
    `characterId` VARCHAR(191) NOT NULL,
    `humanity` INTEGER NULL,
    `hunger` INTEGER NULL,
    `rage` INTEGER NULL,
    `arete` INTEGER NULL,
    `quintessence` INTEGER NULL,
    `paradox` INTEGER NULL,
    `despair` INTEGER NULL,
    `redemption` INTEGER NULL,
    `renownGlory` INTEGER NULL,
    `renownHonor` INTEGER NULL,
    `renownWisdom` INTEGER NULL,
    `harano` INTEGER NULL,
    `hauglosk` INTEGER NULL,

    PRIMARY KEY (`characterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterPower` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `type` ENUM('DISCIPLINE', 'GIFT', 'SPHERE', 'EDGE') NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterMeritFlaw` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `type` ENUM('MERIT', 'FLAW') NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `points` INTEGER NOT NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterItem` (
    `id` VARCHAR(191) NOT NULL,
    `characterId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterAttribute` ADD CONSTRAINT `CharacterAttribute_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterSkill` ADD CONSTRAINT `CharacterSkill_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterStatus` ADD CONSTRAINT `CharacterStatus_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterPower` ADD CONSTRAINT `CharacterPower_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterMeritFlaw` ADD CONSTRAINT `CharacterMeritFlaw_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterItem` ADD CONSTRAINT `CharacterItem_characterId_fkey` FOREIGN KEY (`characterId`) REFERENCES `Character`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
