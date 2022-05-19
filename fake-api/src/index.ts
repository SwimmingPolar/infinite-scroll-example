import dotenv from 'dotenv'
dotenv.config({ path: 'config/dev.env' })

import express from 'express'
import mongoose from 'mongoose'

import api from 'api'

import log from 'utils/logger'
import populateDatabase from 'utils/populateDatabase'

const MONGODB_URI = process.env.MONGODB_URI || ''
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    log.info(`Connected to ${MONGODB_URI}`)
  })
  .catch(error => {
    log.error('mongodb', error)
  })

const app = express()

app.use('/api', api)

const PORT = 5611
app.listen(PORT, () => {
  log.info(`App running on ${PORT}`)
})

/**
 * @description populate with db with N number of entries
 */
// comment this line out after initial population
// populateDatabase(500)
