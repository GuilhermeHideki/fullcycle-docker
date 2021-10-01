import { app } from './routes.mjs'

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`voando na ${PORT}`)
})
