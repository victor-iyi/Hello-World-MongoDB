const assert = require('assert');
const People = require('../models/people');

describe('Saving records to the database', () => {

  // Save record to the db
  it('Saves record(s) to the database', (done) => {
    const dave = new People({
      firstname: 'Dave',
      lastname: 'McFarland',
      age: 43
    });
    // Save this document
    dave.save().then(() => {
      assert(!dave.isNew);
      done();
    }).catch((err) => {
      console.error(err);
    });;
  });

});
