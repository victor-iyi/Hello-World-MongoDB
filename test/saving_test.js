const assert = require('assert');
const People = require('../models/people');

// Save document(s) to collections
describe('Saving documents to collections', () => {

  it('Saves documents to the database', (done) => {
    const firstname = 'Dave',
          lastname = 'McFarland',
          age = 43;
    const dave = new People({ firstname, lastname, age });
    // Save this document
    dave.save().then(() => done() ).catch((err) => console.error(err) );
  });

});
