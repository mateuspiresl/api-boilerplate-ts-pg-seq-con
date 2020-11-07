import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/database';

export class Thing extends Model {
  public name!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Thing.init(
  {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Thing',
    tableName: 'things',
  },
);
