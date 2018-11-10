var mongoose = require('mongoose');
//==============================================================================
/**
*Create User Schema
*/
var ItemSchema = mongoose.Schema({
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
//==============================================================================
/**
*Schema methods
*/
// UserSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };
//==============================================================================
/**
*Create User Model
*/
var ItemModel = mongoose.model('Item', ItemSchema);
//==============================================================================
/**
*Export Module
*/
module.exports = ItemModel;