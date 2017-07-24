const People = require('../models/people');
const assert = require('assert');

// Find documents from the collection
describe('Finding documents', () => {
  // Saves documents to be found
  const johnFirstname = 'John',
        johnLastname = 'Doe';
  const janeFirstname = 'Jane',
        janeLastname = 'Doe';
  let john, jane;
  beforeEach((done) => {
    // John Doe
    john = new People({ firstname: 'John', lastname: 'Doe' });
    john.save().then(() => {
      assert(!john.isNew);
      // done();
    }).catch(() => console.log('Could not save John!') );
    // Jane Doe
    jane = new People({ firstname: 'Jane', lastname: 'Doe' });
    jane.save().then(() => {
      assert(!jane.isNew);
      done();
    }).catch((err) => console.log('Could not save Jane!') );
  });

  // Find people
  it('finds document from collections', (done) => {
    People.findOne({ firstname: johnFirstname }).then((data) => {
      assert(data.firstname === johnFirstname);
      done();
    }).catch((err) => {
      console.error(`ERR: Could not find ${johnFirstname} ${johnFirstname}`);
    });
  });

  // Finds by id
  it('Finds document from collection by ID', (done) => {
    People.findOne({ _id: jane._id }).then((data) => {
      assert(data._id.toString() === jane._id.toString());
      done();
    }).catch((err) => {
      console.err(`ERR: Could not find ${janeFirstname} ${janeLastname}`)
    });
  });

});
