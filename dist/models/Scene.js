"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
exports.initScene = initScene;
const sequelize_1 = require("sequelize");
// Cena de uma aventura
class Scene extends sequelize_1.Model {
}
exports.Scene = Scene;
function initScene(sequelize) {
    Scene.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        sceneIdentifier: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        imageUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        audioUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        apiConsequences: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'Scene',
        freezeTableName: true,
        timestamps: true,
    });
    return Scene;
}
