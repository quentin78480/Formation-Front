// LA MANIPULATION DES CONTENUS \\

// -- fonction Flemard
l = e => console.log(e);


// -- je souhaite recuperer mon lien google ; comment proceder ?
var google = document.getElementById('google')
console.log(google)

// -- Maintenant, je souhaite acceder aux informations de ce lien ...

    // -- A :Le lien vers lequel pointe la balise
    l(google.href);

    // -- B : L'ID de la balise
    l(google.id)

    // -- C : La classe de la balise
    l(google.className)

    // -- D : LE texte de la balise
    l(google.textContent)


    /* 
        Maintenant je souhaite modifier le contenu de mon lien !
        Comme une vrariable classique je vais simplement  venir affecter une nouvelle valeur a mon textContent
    */

    google.textContent = "12 ba "


// AJOUTER UN ELEMENT DANS MA PAGE \\

/* 
    Nous allons utiliser 2 methodes :

    La fonction document.createElement() va permettre de generer un nouvelle element dans le DOM ; que je pourrai modifier par la suite avec les methode que nous venons de voir

    NB : Le nouvelle element est placé en memoire ...
*/

// -- Definition de l'element
var span = document.createElement("span");

// -- Si je souhaite lui donner un ID
span.id = "monSpan"

//-- Si je souhaite lui attribuer du contenu
span.textContent = "Mon beau texte en JS"

// -- Si je souhaite afficher dans ma page html
google.appendChild(span);


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */


var h1 = document.createElement('h1');

h1.textContent = "Titre de mon article";

google.href = "http://sharemycode.fr/hugo3";

google.style.textDecoration = "none";

google.style.color = "red";


google.appendChild(h1);

// CORRECTION \\


// -- Création de la balise h1
var h1 = document.createElement('h1');

// -- Création de la balise a
var a = document.createElement('a');

// -- Titre de mon Article
a.textContent = "Titre de mon Article";

// -- Je donne un lien à mon lien
a.href="#";

// -- Je met mon lien a, dans mon h1
h1.appendChild(a);

// -- Je met mon h1 dans la page
document.body.appendChild(h1);

//  -- Je veux que mon lien soit de couleur rouge
a.style.color = "red";

 // -- Je veux que mon lien ne soit pas souligné
 a.style.textDecoration = "none";













































