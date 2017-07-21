const mongoose = require('mongoose');

// ES6 Promise
mongoose.Promise = global.Promise;

// Connect to the databse before test runs...
before((done) => {
  // Connect to the database
  const database = 'helloworld';
  mongoose.connect(`mongodb://localhost/${database}`);

  // Listen for connection and error!
  mongoose.connection.once('open', () => {
    console.log('Connection successful!');
    done();
  }).on('error', (err) => {
    console.error('Could not connect to database')
  });

});

