const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

function Database(name) {
  this.name = name;
}

// connect to mongodb
Database.prototype.connect = function() {
  // using Promise
  return new Promise(function(resolve, reject) {
    mongoose.connect(`mongodb://localhost:27017/${this.name}`, { useMongoClient: true })
      .then(resolve) // .then(() => resolve())
      .catch(reject); // .catch(err => reject(err))
  });
  /**
    * // using a callback
    * mongoose.connect(`mongodb://localhost/${this.name}`, { useMongoClient: true })
    * .then(() => cb(false))
    * .catch(err => cb(err));
    */
};

// create documents
Database.prototype.insert = function() {
  //TODO: body...
};

// read documents
Database.prototype.read = function() {
  //TODO: body...
};

// update documents
Database.prototype.update = function() {
  //TODO: body...
};

// delete documents
Database.prototype.delete = function() {
  //TODO: body...
};

module.exports = Database;
