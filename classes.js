// déclaration d'une classe
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

// héritage simple
class Etudiant extends Humain 
{
    constructor(prenom, nom, sexe)
    {
        super(prenom, nom, sexe);
        this.niveau = "BAC + 2";
    }
}

// héritage avec "overriding" 
    accueillir(personne)
    {
        // on récupère le "nom de la classe" dont l'objet 'personne' est une instance
        let type_personne = personne.constructor.name;    
        // on fait une 'machine à état' pour traiter chaque état séparémment
        switch(type_personne)
        {
            case 'Etudiant':
                console.log("Qui est tu?");
                console.log("ici c'est un cours de", this.cours)
                console.log("pourquoi est-tu en retard, ", personne.prenom);
                break;
            case 'Professeur':
                console.log('Bonjour cher collègue, entrez je vous prie!')
                break;
            case 'Humain':
                console.log('Que faites-vous ici ?');
                break;
            default:
                console.error('type inconnu !');
                break;
        }
    }
}

module.exports = { Humain, Etudiant, Professeur }
