const express = require('express');
const helmet = require('helmet');
const app = express();















































// Add a Router for /_api before freeCodeCamp code
const apiRouter = express.Router();
apiRouter.get('/', (req, res) => {
  res.json({ message: "Welcome to the API!" });
});
app.use('/_api', apiRouter); // Override before their line

app.use(helmet());

module.exports = app; // freeCodeCamp line
const api = require('./server.js'); // freeCodeCamp line
app.use(express.static('public')); // freeCodeCamp line
app.disable('strict-transport-security'); // freeCodeCamp line
app.use('/_api', api); // freeCodeCamp line (this will override our Router)
app.get("/", function (request, response) { // freeCodeCamp line
  response.sendFile(__dirname + '/views/index.html'); // freeCodeCamp line
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🔥🔥 
The information securtiy App started on Port ${port} 🔥🔥`);
});
