const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hai, Ceysha!');
});

module.exports = app;
