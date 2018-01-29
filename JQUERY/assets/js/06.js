$(function() {

    l = e => console.log();


    // -- Je souhaite sélectionner toutes les divs de ma page
    l($('div'));

    // -- Je souhaite selectionner la balise header de ma page
    l($('nav'));

    // -- Je souhaite tout les elements déscendants directs (enfants) qui sont dans la nav
    l($('nav').children());

    // -- Parmis ses descendants, uniquement les éléments "ul"
    l($('nav').children('ul'));

    // -- je souhaite récuperer tout les elements li de mon "ul"
    l($('nav').children('ul').find('li'));

    // -- Si je souhaite récuperer uniquement le 2eme éléments de mes "li"
    l($('nav').find('li').eq(1));

    // -- Je souhaite connaitre le voisin immédiat de ma "nav"
    l($('nav').next());
    l($('nav').next().next()); //le voisin du voisin
    l($('nav').prev()); // le voisin précédent

    // -- Les parents
    l($('nav').parent())
})