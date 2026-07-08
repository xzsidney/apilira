"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAction = void 0;
exports.initSceneAction = initSceneAction;
const sequelize_1 = require("sequelize");
// Relação entre cena e ação, com cenas de sucesso e falha
class SceneAction extends sequelize_1.Model {
}
exports.SceneAction = SceneAction;
function initSceneAction(sequelize) {
    SceneAction.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        sceneId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        actionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        successSceneId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
        failureSceneId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
        order: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        tableName: 'SceneAction',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['sceneId', 'actionId'],
            },
        ],
    });
    return SceneAction;
}
