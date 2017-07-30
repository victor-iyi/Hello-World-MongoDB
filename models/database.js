const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

function Database(name) {
  this.name = name;
}

// connect to mongodb
Database.prototype.connect = function(cb) {
  mongoose.connect(`mongodb://localhost/${this.name}`, { useMongoClient: true })
    .then(() => cb(null))
    .catch(err => cb(err));
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
