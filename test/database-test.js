const expect = require('chai').expect;

describe('Database connection', function() {
  const Database = require('../models/database.js');
  const db = new Database('helloworld');

  // connect
  it ('should connect to mongodb server.', function(done) {
    db.connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  // create (insert) [ PENDING TEST ]
  it ('should insert document into database collection');

  // read [ PENDING TEST ]
  it ('should read documents from a collection');

  // update [ PENDING TEST ]
  it ('should update a collection\'s document');

  // delete [ PENDING TEST ]
  it ('should delete document(s) from a collection');

});
