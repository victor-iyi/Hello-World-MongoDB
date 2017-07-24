const mongoose = require('mongoose');

// Using ES6 Promise library...
mongoose.Promise = global.Promise;

// Connect to the database before running other tests...
before((done) => {

  // Connects to the mongodb and use this db
  const database = 'helloworld';
  mongoose.connect(`mongodb://localhost/${database}`);

  // Listen for connection and error events...
  mongoose.connection.once('open', () => {
    console.log('Connected to the database!');
    done();
  }).on('error', (err) =>{
    console.error('Oops! Could not connect to the database!');
  });

});

// Drop a collection before every tests...
beforeEach((done) => {
  // Drop the collection...
  mongoose.connection.collections.peoples.drop(() => {
    console.log('Dropping collections');
    done(); // move on to the next test...
  });

});
