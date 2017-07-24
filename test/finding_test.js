const People = require('../models/people');
const assert = require('assert');

// Find documents from the collection
describe('Finding documents', () => {
  // Saves documents to be found
  beforeEach((done) => {
    const dave = new People({ firstname: 'Dave', lastname: 'McFarland', age: 43 });
    // Save this document
    dave.save().then(() => done() ).catch((err) => console.error(err) );
  });

  // Find people
  it('finds credentials from collections', (done) => {
    const firstname = 'Dave';
    const lastname = 'McFarland';
    People.findOne({ firstname: 'Dave' }).then((data) => {
      assert(data.firstname === firstname);
      done();
    }).catch((err) => {
      console.log(`Could not find ${firstname}`);
    });
  });

});
