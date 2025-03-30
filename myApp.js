const express = require('express');
const helmet = require('helmet');
const app = express();
















































const apiRouter = express.Router();
apiRouter.get('/', (req, res) => {
  res.json({ message: "Welcome to the API!" });
});
app.use('/_api', apiRouter);

app.use(helmet());

//const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
//app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🔥🔥 
The information securtiy App started on Port ${port} 🔥🔥`);
});

module.exports = app;