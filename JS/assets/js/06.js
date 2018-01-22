// LES FONCTIONS \\

// -- Déclarer une fonction
/*
    NB : cette fontion ne retourne aucune valeur et ne prend pas de paramettre
*/
function Bonjour() {
    /*
        Lors de l'appel de cette fonction, les instructions ci-dessous serons executées...
    */
    alert('Bonjour !');
}

/*
    Je vais appeller ma fonction Bonjour() et declencher ses instructions
*/
// Bonjour()


/*
    Déclarer une fonction qui prend une variable en parametre
*/
function ditBonjour(Prenom,Nom) {
    document.write("<p> Bonjour <strong>" + Prenom + " " + Nom +"</strong> !</p>")
}

// utiliser une fonction avec des paramètres
ditBonjour("Quentin","CHATEAUREYNAUD")

// EXERCICE\\
/* Creer une fonction permettant d'effectuer l'addition de deux nombres passés en parametre */

var nb1, nb2, resultat;
function Addition(nb1,nb2) {
    return nb1 + nb2;
}

console.log(Addition(5,6));






































