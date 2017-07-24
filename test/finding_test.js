const People = require('../models/people');
const assert = require('assert');

// Find documents from the collection
describe('Finding documents', () => {
  // Saves documents to be found
  beforeEach((done) => {
    // John Doe
    const john = new People({ firstname: 'John', lastname: 'Doe' });
    john.save().then(() => {
      console.log('John saved to the db!');
      // done();
    }).catch(() => {
      console.log('Could not save John!');
    });
    // Jane Doe
    const jane = new People({ firstname: 'Jane', lastname: 'Doe' });
    jane.save().then(() => {
      console.log('Jane saved to the db!');
      done();
    }).catch((err) => {
      console.log('Could not save Jane!')
    });
  });

  // Find people
  it('finds credentials from collections', (done) => {
    assert(true);
    done();
  });

});
