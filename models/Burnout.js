const mongoose = require('mongoose')

const BurnoutSchema = new mongoose.Schema({
  Burnout: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
 
})

module.exports = mongoose.model('Burnout', BurnoutSchema)

