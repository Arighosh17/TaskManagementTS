import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './user';
import Team from './team';

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public status!: string;
  public priority!: string;
  public userId!: number;
  public teamId!: number;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    status: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    priority: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tasks',
  }
);

Task.belongsTo(User, { foreignKey: 'userId' });
Task.belongsTo(Team, { foreignKey: 'teamId' });

export default Task;
