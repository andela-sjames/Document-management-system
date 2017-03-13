const User = require('../models').User;

module.exports = {
    createUser:(req, res) => {

        const user = {
            username: req.body.username,
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            passwordHash: req.body.password
        }

        // search if the user exist by via email before creating.

        User.findAll({
            where: {
                email: req.body.email
            }
        }).then((result) => {
            if(result) {
                return res.status(409).json({
                    message: "email already taken"
                })
            }
            User.create(user).then((user) => {
                return res.status(201).json(user);
            })
            .catch((error) => {
                return res.status(400).json(error);
            });
        })
    },

    getUsers: (req, res) => {
        User.findAll().then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
    }
}
