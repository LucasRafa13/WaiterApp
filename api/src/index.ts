import express from 'express'
import mongoose from 'mongoose'

import { router } from './router'

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/waiterapp'

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
    const app = express()
    const port = 3001

    app.use(express.json())
    app.use(router)

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error))
