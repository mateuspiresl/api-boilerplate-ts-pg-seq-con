import { QueryInterface, DataTypes } from 'sequelize';

const TABLE_NAME = 'things';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable(TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.dropTable(TABLE_NAME);
}
