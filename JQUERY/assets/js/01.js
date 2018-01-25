// LA DISPONIBILITE DU DOM \\

/* 
    A partir du moment ou mon DOM,c'est a dire l'ensemble de l'arborescence de ma page HTML est complètement chargé; je peux commencer a utiliser JQuery.

    Je vais mettre l'ensemble de mon code dans une fonction, cette focntion sera appelée AUTOMATIQUEMENT !!! par JQuery lorsque le DOM sera entièrement défini.

    3 façon de faire :
*/

// -- 1ère Méthode :

jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder a mon code JS ...
});

// -- 2ème Méthode :

$(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder a mon code JS ...
});

// -- 3ème Méthode :

$(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder a mon code JS ...
});

$(() =>{
    alert('Bienvenue dans ce cours JQUERY !');

    // -- En JS :
    document.getElementById('TexteEnJquery').innerHTML = "<strong>Mon texte en JS</strong>"

    // -- JQ :
    // -- EN JQuery, les selecteurs sont les mêmes qu'en CSS !!!
    $('#TexteEnJquery').html('Mon texte en JQ')


});














































