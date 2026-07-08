"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundDefinition = void 0;
exports.initBackgroundDefinition = initBackgroundDefinition;
const sequelize_1 = require("sequelize");
// Definição de antecedentes (backgrounds) por estilo de jogo
class BackgroundDefinition extends sequelize_1.Model {
}
exports.BackgroundDefinition = BackgroundDefinition;
function initBackgroundDefinition(sequelize) {
    BackgroundDefinition.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'BackgroundDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'gameStyle'],
            },
        ],
    });
    return BackgroundDefinition;
}
