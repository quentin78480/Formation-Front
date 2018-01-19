// -- Declarer un tableau Numerique

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Adeline";
monTableau[1] = "Hugo";
monTableau[2] = "Arnaud";

console.log(monTableau);
console.log(monTableau[0]); // -- Adeline
console.log(monTableau[2]); // -- Arnaud

var NosPrenoms = ["Jhon", "Hana", "Maxime", "Adeline", "Jonathan"];
console.log(NosPrenoms);

// -- Déclarer et Affecter des valeurs à un objet.
// PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT !!!!!!! (c'est un objet plus 
// un tableau)

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 28
}


console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

// -- Je vais creer 2 tableaux numeriques
var listeDePrenom = ["Hugo", "Rodrigue", "Kristie"];
var listeDeNom = ["LIEGEARD", "NOUEL", "SOUKAI"];

// -- Je vais créer un tableau en 2 dimensions a partir de mes 2 tableaux
var Annuaire = [ listeDePrenom, listeDeNom ];

// -- Afficher un Nom et un Prenom sur ma Page HTML !
document.write( Annuaire[0][1] );
document.write( ' ');
document.write( Annuaire[1][1] );
document.write( ' ');


var AnnuaireDesStagiaires2 = [
    { prenom : "Hugo",      nom : "LIEGEARD",   tel: "0783 97 15 15" },
    { prenom : "Adeline",    nom : "CLERE",      tel: "XXXX XX XX XX" },
    { prenom : "Jhon",       nom : "GARCIA",     tel: "XXXX XX XX XX" },
];

console.log(AnnuaireDesStagiaires2[0])
console.log(AnnuaireDesStagiaires2[0].prenom)
console.log(AnnuaireDesStagiaires2[0].nom)
/*
    Le fait d'avoir des objets dans un tableau indexé ; nous avons
    mis en place le format JSON
*/



// Exercice \\
var PrenomStagiaire = [ "Hugo", "Alice", "Robin", "Eudes", "Samy" ];
var NomStagiaire = [ "LIEGEARD", "CARRIERE", "CALLET", "QUENNEVILLE", "BOULENOIR" ];
var TelStagiaire = [ "06 06 06 06 06", "06 65 84 52 21", "06 75 40 85 71", "06 98 45 15 28", "06 54 78 73 91", "06 73 35 45 52"];

var AnnuaireDesStagiaires = [ NomStagiaire, PrenomStagiaire, TelStagiaire ];


document.write( AnnuaireDesStagiaires[0][0] );
document.write(' ');
document.write( AnnuaireDesStagiaires[1][0] );
document.write(' ');
document.write( AnnuaireDesStagiaires[2][0] );
document.write(' ');


// AJOUTER UN ELEMENT \\

var Couleurs = [ 'Rouge', 'Jaune', 'Vert'];


// -- Si je souhaite ajouter un element dans mon tableau
// je fait appel a la fonction push() qui me renvoie le nombre 
// d'éléments


console.clear();
console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);


// -- NB : La fontion unshift() permet d'ajouter un ou plusieurs
// élément en debut de tableau

// La fonction pop() me permet de supprimer un ou plusieurs éléments de
// mon tableau et d'en recuperer la valeur. Je peux accesssoirement 
// récupérer cette valeur dans une variable.

var monDernierElement = Couleurs.pop()
console.log(Couleurs)
console.log(monDernierElement)

// -- La meme chose est possible avec le premier élément en utilisent
// la fonction shift();

// -- NB : La fonction splice() vous permet de faire sortir un ou plusieurs
// élément de votre tableau






















