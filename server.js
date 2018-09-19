const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/hi', (req, res) => {
  const hi = [
    {id: 1, greeting: 'hello'},
    {id: 2, greeting: 'howdy'},
    {id: 3, greeting: 'hola'},
  ];

  res.json(hi);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);