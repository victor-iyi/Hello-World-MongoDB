const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: false,
    trim: false
  },
  lastname: {
    type: String,
    required: false,
    trim: true
  },
  age: {
    type: Number,
    required: false,
    trim: true
  },
});
// Before saving to the database.
// We need to hash the password
PeopleSchema.pre('save', (next) => {
  const user = this; // current entry
  // unhashed password, no of times to perform hashing, callback
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err)
      return next(err);
    user.password = hash;
    next(); // go to the next middleware.
  });
});

const People = mongoose.model('peoples', PeopleSchema);

module.exports = People;
