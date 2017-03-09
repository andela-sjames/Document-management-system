const Role = require('../models').Role;

module.exports = {
  create: (req, res) => {
    Role.findAll({
      where: {
        title: req.body.title
      }
    }).then((result) => {
      if (result) {
        return res.status(409).json({ message: 'Role already exists' });
      }
      Role.create(req.body).then((role) => {
        return res.status(201).json(role);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
    });
  },
};
