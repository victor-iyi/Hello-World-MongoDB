const mongoose = require('mongoose');

// Connect to the database
const database = 'helloworld';
mongoose.connect(`mongodb://localhost/${helloworld}`);

// Listen for connection and error!
mongoose.connection.once('open', () => {
  console.log('Connection successful!');
}).on('error', (err) => {
  console.error('Could not connect to database')
});