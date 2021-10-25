Déclaration d'une classe
'''js
class Humain
{
    constructor(prenom, nom, sexe)
    {
        this.prenom = prenom; // "mon" prénom est "prenom"
        this.nom = nom;
        this.sexe = sexe;
    }

    accueillir(personne)
    {
        console.log("Bonjour, je m'appelle", this.prenom);
        console.log("comment allez-vous", personne.prenom, personne.nom);
        console.log("entrez s'il vous plait!");
    }
}
'''

Création d'une instance (un objet)

'''js
let paul = new Humain('Paul', 'Dupont', 'M');
'''
