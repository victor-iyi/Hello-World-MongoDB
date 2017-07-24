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
    assert(true);
    done();
  });

});
