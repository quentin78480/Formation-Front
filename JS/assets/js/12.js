
// LE DOM \\

/*

    Le DOm est une interface de developpement en JS pour HTML. Grace au DOM, je vais etre en mesure d'acceder / modifier mon HTML.

    L'Objet "document" : c'est le point d'entrer vers mon contenu HTML

    Chaque page chargée dans mon navigateur à un objet "document"

*/ 

// Comment puis je faire pour recuperer les differentes informations de ma page HTML.

// Le document.getElementById()

/* 
    Le document.getElementById() est une focntion qui va permettre de recuperer un element HTML a partir de son identifiant unique : ID.
*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);

// Le document.getElementByClassName()

/* 
    Le document.getElementByClassName() est une focntion qui va permettre de recuperer un ou plusieurs element HTML a partir de leur classe.
*/


var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// -- Il renvoie un tableau JS avec mes elements HTML (collection HTML)


// Le document.getElementByTagName()

/* 
    Le document.getElementByClassName() est une focntion qui va permettre de recuperer un ou plusieurs element HTML a partir de leur "nom de balise".
*/

var element = document.getElementsByTagName('p');
console.log(element);







































