const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');

console.log(routes, 'this route is not missing');
// Set up the express app
const app = express();
const router = express.Router();

routes(router);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use('/api', router);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message :'Hello you have successfully made it here......',
}));


const port = +process.env.PORT || 8080;
app.set('port', port);

app.listen(port);
console.log(`server started on port ${port}`);

module.exports = app;