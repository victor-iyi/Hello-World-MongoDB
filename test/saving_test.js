const assert = require('assert');
const People = require('../models/people');

// Save document(s) to collections
describe('Saving documents to collections', () => {

  it('Saves documents to the database', (done) => {
    // John Doe
    const john = new People({ firstname: 'John', lastname: 'Doe' });
    john.save().then(() => {
      assert(!john.isNew);
      // done();
    }).catch(() => console.log('Could not save John!') );
    // Jane Doe
    const jane = new People({ firstname: 'Jane', lastname: 'Doe' });
    jane.save().then(() => {
      assert(!jane.isNew);
      done();
    }).catch((err) => console.log('Could not save Jane!') );
  });

});
