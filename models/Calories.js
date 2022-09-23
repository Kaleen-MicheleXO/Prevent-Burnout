const mongoose = require('mongoose')

const CalorieSchema = new mongoose.Schema({
  Calories: {
    type: String
  },
  userId: {
    type: String,
    // required: true
  }
})

module.exports = mongoose.model('Calories', CalorieSchema)