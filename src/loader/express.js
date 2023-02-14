const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving users.');
      return;
    }

    res.json(result);
  });
});

app.post('/api/users', (req, res) => {
  const user = req.body;

  db.collection('users').insertOne(user, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating user.');
      return;
    }

    res.status(201).json(result.ops[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
