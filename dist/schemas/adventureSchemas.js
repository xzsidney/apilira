"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSceneToActionSchema = exports.createActionSchema = exports.createSceneSchema = exports.createAdventureSchema = void 0;
const zod_1 = require("zod");
exports.createAdventureSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Nome da aventura é obrigatório'),
    gameStyle: zod_1.z.string().min(1, 'Estilo de jogo é obrigatório'),
    objective: zod_1.z.string().optional(),
});
exports.createSceneSchema = zod_1.z.object({
    sceneIdentifier: zod_1.z.string().min(1, 'O Identificador da Cena é obrigatório'),
    title: zod_1.z.string().min(1, 'O título da Cena é obrigatório'),
    description: zod_1.z.string().min(1, 'A descrição da Cena é obrigatória'),
    imageUrl: zod_1.z.string().optional().nullable(),
    audioUrl: zod_1.z.string().optional().nullable(),
    apiConsequences: zod_1.z.record(zod_1.z.any()).optional().nullable(),
});
exports.createActionSchema = zod_1.z.object({
    actionIdentifier: zod_1.z.string().min(1, 'Identificador da ação obrigatório'),
    focus: zod_1.z.string().min(1, 'Foco (Mental, Físico, Social) é obrigatório'),
    text: zod_1.z.string().min(1, 'Texto da ação é obrigatório'),
    testStr: zod_1.z.string().min(1, 'Teste exigido é obrigatório'),
    difficulty: zod_1.z.number().int().min(0).default(0),
});
exports.linkSceneToActionSchema = zod_1.z.object({
    successSceneId: zod_1.z.string().uuid().optional().nullable(),
    failureSceneId: zod_1.z.string().uuid().optional().nullable(),
    order: zod_1.z.number().int().default(0),
});
