const Studente = require("../models/studente.model.js");

// Create and Save a new Studente
exports.create = (req, res) => {
  
};

// Retrieve all Studenti from the database.
exports.findAll = (req, res) => {
   Studente.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Studenti."
      });
    else res.send(data);
  });
};

// Find a single Studente with a customerId
exports.findOne = (req, res) => {
   Studente.findById(req.params.studenteId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Studente with id ${req.params.studenteId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Studente with id " + req.params.studenteId
        });
      }
    } else res.send(data);
  });
};

// Update a Studente identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Studente with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Studente from the database.
exports.deleteAll = (req, res) => {
  
};

//create the table with json data



