import express from 'express'
import { Person } from './model.mjs'
import faker from 'faker'

export const app = express()

app.get('/', async (request, response) => {
  let html = [
    `<h1>Full Cycle Rocks!<h1>`
  ]

  try {
    await Person.create({
      name: faker.name.findName()
    })

    const people = await Person.findAll()

    if (people.length) {
      html.push('<ul>')
      people.map(person => {
        html.push(`<li>${person.name}</li>`)
      })
      html.push('</ul>')
    }

    response.send(html.join(''))
  } catch (error) {
    logger.error(error)
    response.send('404 - Default backend')
  }
})
