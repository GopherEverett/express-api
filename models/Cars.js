const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timesatmps: true }
)

module.exports = mongoose.model('Car', Car)
