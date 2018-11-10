var mongoose = require('mongoose');

// Create User Schema
var itemSchema = mongoose.Schema({
  item_name: {
    type: String,
    required: true
  },
  item_manufacturer: {
    type: String
  },
  description: {
    type: String
  },
  item_value: {
    type: Number
  },
  category: {
      type: String
  },
  created_on: {
    type: Date,
    default: Date.now
  }
});

// Create User Model
var Item = mongoose.model('Item', itemSchema);

module.exports = Item;