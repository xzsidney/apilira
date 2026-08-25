"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const models_1 = require("./models");
async function seedHavens() {
    try {
        await db_1.default.authenticate();
        console.log('Conectado ao banco de dados com sucesso.');
        const characters = await models_1.CharacterVampire.findAll();
        console.log(`Encontrados ${characters.length} personagens.`);
        let defaultLoc = await models_1.DefinitionLocation.findOne({ where: { name: 'Belenzinho', level: 3 } });
        if (!defaultLoc) {
            defaultLoc = await models_1.DefinitionLocation.findOne({ where: { level: 3 } });
        }
        if (!defaultLoc) {
            console.error('Nenhum distrito de level 3 encontrado!');
            process.exit(1);
        }
        console.log(`Distrito padrão para refúgio: ${defaultLoc.name} (${defaultLoc.id})`);
        for (const char of characters) {
            const existingHaven = await models_1.CharacterHaven.findOne({ where: { characterId: char.id } });
            if (!existingHaven) {
                await models_1.CharacterHaven.create({
                    characterId: char.id,
                    locationId: defaultLoc.id,
                    name: 'Refúgio Pessoal Seguro',
                    securityLevel: 1,
                    luxuryLevel: 1
                });
                console.log(`✅ Refúgio criado para o personagem: ${char.name} (${char.id})`);
            }
            else {
                console.log(`ℹ️ Personagem ${char.name} já possui refúgio.`);
            }
            if (!char.currentLocationId) {
                char.currentLocationId = defaultLoc.id;
                char.isRestingInHaven = true;
                await char.save();
            }
        }
        console.log('🎉 Todos os personagens possuem refúgio registrado!');
        process.exit(0);
    }
    catch (error) {
        console.error('Erro ao popular refúgios:', error);
        process.exit(1);
    }
}
seedHavens();
