module.exports = app => {
  const studenti = require("../controller/studenti.controller.js");

  // Create a new Studente
  app.post("/studenti", studenti.create);

  // Retrieve all Studente
  app.get("/studenti", studenti.findAll);

  // Retrieve a single Studente with Id
  app.get("/studenti/:studenteId", studenti.findOne);

  // Update a Studente  with Id
  app.put("/studenti/:studenteId", studenti.update);

  // Delete a Studente with Id
  app.delete("/studenti/:studenteId", studenti.delete);

  // Cancella tutti gli studenti
  app.delete("/studenti", studenti.deleteAll);
};