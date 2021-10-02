import Sequelize from 'sequelize'
const { Model, DataTypes } = Sequelize

export class Person extends Model {}

export async function init(sequelize) {
  Person.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'people',
    createdAt: true,
    updatedAt: true,
  })

  await sequelize.sync({
    alter: true,
  })
}
