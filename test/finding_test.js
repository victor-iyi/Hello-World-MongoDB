const People = require('../models/people');
const assert = require('assert');

// Find documents from the collection
describe('Finding documents', () => {
  // Saves documents to be found
  const firstname = 'Dave',
        lastname = 'McFarland',
        age = 43;
  let dave;
  beforeEach((done) => {
    dave = new People({ firstname, lastname, age });
    // Save this document
    dave.save().then(() => done() ).catch((err) => console.error(err) );
  });

  // Find people
  it('finds document from collections', (done) => {
    People.findOne({ firstname: 'Dave' }).then((data) => {
      assert(data.firstname === firstname);
      done();
    }).catch((err) => {
      console.error(`ERR: Could not find ${firstname} ${lastname}`);
    });
  });

  // Finds by id
  it('Finds document from collection by ID', (done) => {
    People.findOne({ _id: dave._id }).then((data) => {
      assert(data._id.toString() === dave._id.toString());
      done();
    }).catch((err) => {
      console.err(`ERR: Could not find ${firstname} ${lastname}`)
    });
  });

});
