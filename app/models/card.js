const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  cardId: mongoose.Schema.ObjectId,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cardFront: {
    type: String,
    required: true
  },
  cardBack: {
    type: String,
    required: true
  },
  bookmarked: {
    type: Boolean,
    default: false,
    required: true
  },
  deck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Deck',
    required: true
  }
})

 module.exports = mongoose.model('Card', cardSchema)
