const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
require('../models');


// replace the uri string with your connection string.
// const uri = process.env.MONGO_URI
var db = mongoose.connect(process.env.MONGO_URI);

// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });


/* Mongoose schema and model already created in Models! */

/* Need to be able to grab something from state on front end to pull back here and use to communicate with db */

//CREATE

//READ

var findItemByName = function(itemName, done) {
   Item.find( {name: itemName}, (err, data) => {
     if (err) {
      done(err);
    }
     done(null, data);
   })
 
 };

//UPDATE

//DELETE



