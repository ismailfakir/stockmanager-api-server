const db = require("../models");
const Role = db.role;

// Create and Save a new Role
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a role
    const role = new Role({
      name: req.body.name
    });
  
    // Save role in the database
    role
      .save(role)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the role."
        });
      });
  };

// Retrieve all Rolers from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Role.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Roles."
        });
      });
  };

// Find a single Role with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Role.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Role with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Role with id=" + id });
      });
  };
  
  // Update a Role by the id in the request
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Role.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Role with id=${id}. Maybe Role was not found!`
          });
        } else res.send({ message: "Role was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Role with id=" + id
        });
      });
  };
  
  // Delete a Role with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Role.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
          });
        } else {
          res.send({
            message: "Role was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Role with id=" + id
        });
      });
  };
  
  // Delete all Roles from the database.
  exports.deleteAll = (req, res) => {
    Role.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Roles were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Roles."
        });
      });
  };