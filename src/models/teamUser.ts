import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './user';
import Team from './team';

class TeamUser extends Model {
  public userId!: number;
  public teamId!: number;
  public role!: string;
}

TeamUser.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    role: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'team_users',
  }
);

TeamUser.belongsTo(User, { foreignKey: 'userId' });
TeamUser.belongsTo(Team, { foreignKey: 'teamId' });

export default TeamUser;
