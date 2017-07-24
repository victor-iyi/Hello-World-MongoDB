const assert = require('assert');
const People = require('../models/people');

// Delete document from collection
describe('Deletes document from the collection', () => {
  // Saves documents to be deleted
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

  // obj.remove();
  it('Removes this document from the collection', (done) => {

  });

  // Model.remove();
  it('Removes matching document(s) from the collection', (done) => {

  });

  // Model.findOneAndRemove();
  it('Finds document and removes it from the collection', (done) => {

  });

});
