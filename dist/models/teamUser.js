"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const user_1 = __importDefault(require("./user"));
const team_1 = __importDefault(require("./team"));
class TeamUser extends sequelize_1.Model {
}
TeamUser.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    teamId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    role: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'team_users',
});
TeamUser.belongsTo(user_1.default, { foreignKey: 'userId' });
TeamUser.belongsTo(team_1.default, { foreignKey: 'teamId' });
exports.default = TeamUser;
