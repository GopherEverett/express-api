require('dotenv').config()
const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://johnjacobs:jglass0729@cluster0.z0s8i.mongodb.net/cars?retryWrites=true&w=majority'
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db