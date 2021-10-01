import express from 'express'

export const app = express()

app.get('/', (request, response) => {
  let html = [
    `<h1>Full Cycle Rocks!<h1>`
  ]

  response.send(html.join(''))
})
