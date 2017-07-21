const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  name: String,
  age: Number
});

const People = mongoose.model('peoples', PeopleSchema);

module.exports = People;