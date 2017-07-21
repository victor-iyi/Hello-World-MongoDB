const mongoose, { Schema } = require('mongoose');

const PeopleSchema = new Schema({
  name: String,
  age: Number
});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;