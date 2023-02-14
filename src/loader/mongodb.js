const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mydatabase';

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.log('Failed to connect to the database.');
    return;
  }

  console.log('Connected to the database.');
});

