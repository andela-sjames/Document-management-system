const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
const router = express.Router(); 
app.use('/api', router);

// Setup a default catch-all route that sends back a welcome message in JSON format.


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('something is about to happen')
    next(); // make user go to the next route and don't stop here.
});


router.get('*', (req, res) => res.status(200).send({
  message :'Hello you have successfully made it here......',
}));

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);

app.listen(port);
console.log(`server started on port ${port}`);

module.exports = router;