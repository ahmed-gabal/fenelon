const { Humain, Professeur, Etudiant } = require('./classes.js')

// on crée les instances (objets)
let marie  = new Professeur('Marie', 'France', 'F')
let joseph = new Professeur('Joseph', 'Dupont', 'H')
let claude = new Etudiant('Claude', 'Claudel', 'M')

marie.acceuillir(joseph)
marie.accueillir(claude)
joseph.accueillir(marie)
joseph.accueillir(25)
