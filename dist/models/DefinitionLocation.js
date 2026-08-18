"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionLocation = void 0;
exports.initDefinitionLocation = initDefinitionLocation;
const sequelize_1 = require("sequelize");
class DefinitionLocation extends sequelize_1.Model {
}
exports.DefinitionLocation = DefinitionLocation;
function initDefinitionLocation(sequelize) {
    DefinitionLocation.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        parentId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: true,
        },
        attributes: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'vampire',
        },
    }, {
        sequelize,
        tableName: 'DefinitionLocation',
    });
}
