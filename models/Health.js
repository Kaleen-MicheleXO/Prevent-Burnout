const mongoose = require('mongoose')

const HealthSchema = new mongoose.Schema({
    Date: {
      type: String,
      required: false
    },
    completed: {
      type: Boolean,
      required: false,
    },
    Meal: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: false
    },
    Description:{
      type: String,
      required: false
    },
    Calories:{
      type: String,
      required: false
    },
    
  })
  
  module.exports = mongoose.model('Health', HealthSchema)