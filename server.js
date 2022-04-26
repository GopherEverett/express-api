const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const Car = require('./models/Cars')
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/cars', async (req, res) => {
    const cars = await Car.find()
    res.json(cars)
})


app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`)
})