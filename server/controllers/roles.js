const Role = require('../models').Role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        title: req.body.title,
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};
