"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdventureScene = void 0;
exports.initAdventureScene = initAdventureScene;
const sequelize_1 = require("sequelize");
// Relação entre aventura e cena (ordem de exibição)
class AdventureScene extends sequelize_1.Model {
}
exports.AdventureScene = AdventureScene;
function initAdventureScene(sequelize) {
    AdventureScene.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        adventureId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        sceneId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        order: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        tableName: 'AdventureScene',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['adventureId', 'sceneId'],
            },
        ],
    });
    return AdventureScene;
}
