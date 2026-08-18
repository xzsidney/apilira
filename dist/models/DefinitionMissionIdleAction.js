"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionMissionIdleAction = void 0;
exports.initDefinitionMissionIdleAction = initDefinitionMissionIdleAction;
const sequelize_1 = require("sequelize");
class DefinitionMissionIdleAction extends sequelize_1.Model {
}
exports.DefinitionMissionIdleAction = DefinitionMissionIdleAction;
function initDefinitionMissionIdleAction(sequelize) {
    DefinitionMissionIdleAction.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        missionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        stepOrder: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        difficulty: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 6,
            allowNull: false,
        },
        attributeReq: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        skillReq: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        successText: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        failureText: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'DefinitionMissionIdleAction',
    });
}
