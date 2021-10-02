import { Sequelize } from 'sequelize'
import { init } from './model.mjs'
import { app } from './routes.mjs'

const {
  PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
})

try {
  await init(sequelize)
} catch (error) {
  console.error(error)
  process.exit(1)
}

app.listen(PORT, () => {
  console.log(`voando na ${PORT}`)
})
