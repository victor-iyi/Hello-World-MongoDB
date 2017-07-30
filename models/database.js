const mongoose = require('mongoose');

function Database(name) {
  this.name = name;
}


// connect to the database
Database.prototype.connect = function(cb) {
  mongoose.connect(`mongodb://localhost/${this.name}`, { useMongoClient: true});
  mongoose.connection.once('open', function() {
    this.err = null;
    cb(this.err);
  }).on('err', function(err) {
    this.err = err;
    cb(this.err);
  });
};

// insert documents to collections.
Database.prototype.insert = function() {
  
};

module.exports = Database;
