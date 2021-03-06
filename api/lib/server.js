const express = require('express');
const bodyParser = require('body-parser');

const getCharacter = require('./getCharacter');

const app = express();

app.use(bodyParser.json());

app.post('/character/:class', (req, res) => {
  const charClass = req.params.class;
  const character = getCharacter(req.body.name, req.params.class, req.body.birthDate);
  console.log(character);
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(character));
});

module.exports = app;
