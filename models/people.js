const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number
});

const People = mongoose.model('peoples', PeopleSchema);

module.exports = People;
