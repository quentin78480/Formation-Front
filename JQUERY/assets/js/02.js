
// LES SELECTEUR JQUERY \\

// -- Format : $('selecteur');
// -- En JQuery, tout les sélecteur CSS sont disponibles ...

$(function() {
    // -- DOM READY !

    l = e => console.log(e);

    // -- Selectionner toutes les balises SPAN !

    l(document.getElementsByTagName('span'));
    l($('span'));

    // -- Je veux selectionner mon Menu grace a son ID

    l(document.getElementById('menu'));
    l($('#menu'));

    // -- Selectionner une classe

    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // -- Selectionner un Attribut
    l($('[href="https://www.google.fr"]'));

});






















































