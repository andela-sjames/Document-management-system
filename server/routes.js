let userControllerapi = require('./controllers/user');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

const routes = (router) => {
    
    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        console.log('something is about to happen')
        next(); // make user go to the next route and don't stop here.
    });

    router.get('*', (req, res) => res.status(200).send({
        message :'Hello you have successfully made it to the API gateway ...',
    }));

    // User Routes 
    router.post('/users/create', userControllerapi.createUser);
    router.get('/users/all', userControllerapi.allUsers);

};

module.exports = routes;
