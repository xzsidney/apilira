"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkActionToScene = exports.getActions = exports.createAction = void 0;
const adventureSchemas_1 = require("../schemas/adventureSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const createAction = async (req, res) => {
    try {
        const data = adventureSchemas_1.createActionSchema.parse(req.body);
        const action = await models_1.Action.create(data);
        res.status(201).json(action);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ error: error.errors });
        }
        else {
            res.status(500).json({ error: 'Erro ao criar ação no acervo' });
        }
    }
};
exports.createAction = createAction;
const getActions = async (req, res) => {
    try {
        const actions = await models_1.Action.findAll();
        res.json(actions);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar ações' });
    }
};
exports.getActions = getActions;
const linkActionToScene = async (req, res) => {
    try {
        const { sceneId, actionId } = req.params;
        const data = adventureSchemas_1.linkSceneToActionSchema.parse(req.body);
        const link = await models_1.SceneAction.create({
            data: {
                sceneId,
                actionId,
                successSceneId: data.successSceneId,
                failureSceneId: data.failureSceneId,
                order: data.order
            }
        });
        res.status(201).json(link);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ error: error.errors });
        }
        else {
            res.status(500).json({ error: 'Erro ao ligar ação à cena' });
        }
    }
};
exports.linkActionToScene = linkActionToScene;
