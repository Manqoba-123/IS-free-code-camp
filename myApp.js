const express = require('express');
const helmet = require('helmet');
const app = express();

















































app.use(helmet());
app.use(express.static('public'));
app.disable('strict-transport-security');


app.use('/_api', (req, res, next) => {
  res.json({ message: "Welcome to the API!" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
