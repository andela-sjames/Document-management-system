const error = require('./errors');
const User = require('../models').User;


module.exports = {

    generateToken: () => {
        // function should generate token.
    },

    userLogin: (req, res) => {
        // get login details

        const email = req.body.email;
        const password = req.body.password;

        if (email === '' && password === '') {
            error.badRequest('Missing arguments/parameters given')
            .then((errorResponse) => {
                return res.status(400).json(errorResponse);
            })
        }



        User.find({
            where: {
                email: email,
            }
        }).then((result) => {
            if (result.email && !result.verifyPassword(password)) {
                // if user exist verify password
                error.unauthorized('Incorrect password entered, please confirm')
                .then((errorResponse) => {
                    return res.status(401).json(errorResponse);
                });
            } else if(result.email && result.verifyPassword(password)){
                // generate and return token.
                return res.status(200).json({
                    result,
                    token: 'some-random-token',
                })
            }
            
        })



        // confirm and create token with expiration.

        // peace.
    }
}