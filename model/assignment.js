let mongoose = require('mongoose');
const matiere = require('./matiere');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    nomEleve: String,
    note: Number,
    remarque: String,
    nomMatiere: String,
    imageMatiere: String,
    imageProf: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);