import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Team extends Model {
  public id!: number;
  public name!: string;
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'teams',
  }
);

export default Team;
