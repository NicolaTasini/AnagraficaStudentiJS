const sql = require("./db.js");

// constructor
const Studente = function(studente) {
  this.email = studente.nome;
  this.name = studente.cognome;
  this.anno = studente.anno;
  this.sezione = studente.sezione;
  this.specializzazione = studente.specializzazione;
  // da completare con i rimanenti campi
};

Studente.getAll = result => {
  sql.query("SELECT * FROM alunni2004", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("studenti: ", res);
    result(null, res);
  });
};

Studente.findById = (studenteId, result) => {
  sql.query(`SELECT * FROM alunni2004 WHERE ID = ${studenteId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found studente: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Studente with the id
    result({ kind: "not_found" }, null);
  });
};

// da completare con le operazioni di insert, update, delete....

//update 
/*Studente.updateById = (studenteId, colonna, valore, result) => {
  sql.query('UPDATE alunni2004 SET Residenza = ${valore}', (err, res))
}*/

module.exports = Studente;