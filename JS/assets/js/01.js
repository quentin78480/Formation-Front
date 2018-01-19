alert('C\'est bleu');
alert('Ah non c\'est rouge');

// pour faire un commentaire sur une seul ligne
/*  Ici je peux faire
    un commentaire sur 
    plusieurs lignes
*/

// -- 1 : Déclarer une variable en JS
var Prenom;

// -- 2 : Affectuer une valeur
Prenom = "Quentin"

// -- 3 : Afficher la valeur de ma variable dans la console
console.log(Prenom)


// LES TYPES DE VARIABLES \\


// -- Ici typeof me permet de connaitre le type de ma variable
console.log(typeof Prenom);

// -- Déclaration d'un nombre
var Age = 18;

// -- Afficher dans la console
console.log(Age);

// -- Connaitre son Type
console.log(typeof Age);


// LA PORTEE DES VARIABLES \\
/* 
/Les variables declarées directement à la racine du fichier js
/sont appelés variable GLOBALES. 
/
/Elle sont disponibles dans l'ensemble de votre document, 
/y compris dans les fonctions.
/
/###
/
/Les variables déclarées a l'interieur d'une fontion sont 
/appelées variables LOCALES
/
/###
/
/Depuis ECMA 6; vous pouvez déclarer une variable avec le mot clé 
/"let".
/
/Votre variable sera alors accessible uniquement dans le bloc dans 
/lequel, elle est contenu. Cad, declaré.
/
/Si elle est déclarée dans une condition , elle sera disponible 
/uniquement dans le bloc de la condition.
*/


// -- Les variable FLOAT
var uneDecimale = - 2.854;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI/FAUX)
var unBooleen = false //true
console.log(unBooleen)
console.log(typeof unBooleen)

// -- Les constantes
/*
    La déclaration CONST permet de créer une constante accessible
    uniquement en lecture. Sa valeur ne pourra pas etre modifiée par des
    réaffectation ulterieures. Une constante ne peut pas être déclarée
    a nouveau.

    Généralement, pazr convention, les constante seront en majuscules.
*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// -- Je ne peux pas faire cela ...
//USER = "Quentin";
//Uncaught TypeError: Assignment to constant variable

// LA MINUTE INFO \\
/*
    Au fur et a mesure que l'on affecte ou ré-affecte des valeurs
    a une variable, celle-ci prend la nouvelle valeur et le nouvau type
    
    En Javascript, (ECMA Script) ; les variables sont auto-typées
    
    Pour convertir une variable de type NUMBER en STRING et STRING et 
    NUMBER je peux utiliser les fonctions native de javascript.
*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);


// -- La fonction parseInt() pour retourner un Entier a partir
// -- de ma chaine de caractère
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// -- Je ré-affecte une valeur a ma variable
unNombre = "12,55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// -- Conversion d'un nombre en STRING avec  toString()
unNombre = 10;
var maChaineDeCaractere = unNombre.toString();
console.log(typeof unNombre);
console.log(typeof maChaineDeCaractere);

















