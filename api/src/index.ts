import express from 'express'
import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB')
    const app = express()
    const port = 3001

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error))
