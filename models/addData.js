var mongoose = require('mongoose');

// Create User Schema
var itemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemManufacturer: {
    type: String
  },
  year: {
    type: Number
  },
  description: {
    type: String
  },
  itemValue: {
    type: Number
  },
  category: {
      type: String
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

// Create User Model
var Item = mongoose.model('Item', itemSchema);

module.exports = Item;