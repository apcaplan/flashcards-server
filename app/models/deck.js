const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema({
  deckId: mongoose.Schema.ObjectId,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  deckName: {
    type: String,
    required: true
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }]
})

module.exports = mongoose.model('Deck', deckSchema)
