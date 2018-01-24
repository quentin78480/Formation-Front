// LES EVENEMENTS \\

/* 
    Les evenements vont me permettre de declancher une fonction, c'est a dire une serie d'instruction suite a une action de mon utilisateur ...

    OBJECTIF : être en mesure de capturer ces évènements afin d'executer une fonction.

    Les Evenements : Mouse (souris)
        click       : au clic sur un element.
        mouseenter  : la souris passe au dessus de la zone d'un élément.
        mouseleave  : la souris sort de cette zone.
    
    Les Evenement : Keyboard (clavier)
        keydown     : une touche du clavier est enfoncer
        keyup       : une touche du clavier est relachée

    Les Evenement : Window (Fenetre)
        scroll      : défilement de la fenetre
        resize      : redimensionnement de la fenetre

    Les Evenement : Form (formulaire)
        change      : pour les elements <input>, <select> et <textarea>
        submit      : à l'envoie (soumisssion) du formulaire
        input       : pour capter la saisie d'un utilisateur sur un champ <input> (en direct)

    
    // Les Ecouteurs D'Evenement \\

    Pour attacher un evenement a un element, ou autrement dit, pour declarer un ecouteur d'evenement qui se chargera de déclancher la fonction, je vais utiliser la syntaxe suivante :



*/

var p = document.getElementById('MonParagraphe');

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris.

function changerLaCouleurEnRouge(){
    p.style.color = 'red';
}

p.addEventListener('click', changerLaCouleurEnRouge);


/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/


function Writing(){
    alert(input.value);
}

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez votre contenu ...');
input.id = 'monInput';
document.body.appendChild(input);

input.addEventListener('change',Writing);

// CORRECTION \\

// -- Création du champ input
var input = document.createElement('input');
document.body.appendChild(p);

// -- Attribution d'un Attribut
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Saisissez un Contenu...');

//-- Attribution d'un ID
input.id = "MonID";

// -- Ajout dans la page
document.body.appendChild(input);

function voirLaSaisieDeMonInput() {
    console.log(input.value);
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);
































































