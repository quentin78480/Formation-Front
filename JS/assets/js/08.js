// LES CONDITIONS \\

        // var MajoriteLegaleFR = 18;
        // if (14 >= MajoriteLegaleFR) {
        //     alert("Bienvenue !")
        // } 
        // // le "else" n'est pas obligatoire
        // else {
        //     alert("Google")
        // }

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */


// var MajoriteLegaleFR = 18;
// Age = prompt("Quel age as-tu ?")

// if (Age >= MajoriteLegaleFR) {
//     alert("Bienvenue !");
// } 
// else {
//     alert(" Tu n'as pas la majorité ='( ")
//     window.location.href="http://lmgtfy.com/?q=Majorit%C3%A9";
// }

// // CORRECTION \\

// /* -------------------------------
//           EXERCICE 
// Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
// S'il a la majorité légale, alors je lui souhaite la bienvenue, 
// sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
// -------------------------------- */

// // -- 1. Déclarer la Majorité Légale
// var MajoriteLegaleFR = 18;

// // -- 2. Créer une fonction pour demande son age.

// function verifierAge(age) {
//     if(age >= MajoriteLegaleFR) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // -- 3. Je demande a l'utilisateur son age
// var age = parseInt( prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>") );

// // -- 4. Vérification de l'age de l'utilisateur...
// if(verifierAge(age)) {
//     // -- 4a. J'affiche un message de bienvenue
//     alert("Bienvenue sur mon site internet réservé pour les majeurs...");
//     document.write('0_0 !!!');
// }
// else {
//     // -- 4b. J'effectue une redirectionù
//     document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
// }

// LES OPERATEURS DE COMPARAISON \\

// L'operateur de comparaison " == " signifie : égale à
//Il permet de verifier que deux variable sont identiques.

// L'operateur de comparaison " === " signifie : 
//strictement égal à. il va comparer la valeur et le type.

//L'opérateur de comparaison " != " : different de
//L'opérateur de comparaison " !== " : strictement different de





/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp, Mdp, Email;

email = "wf3@hl-media.fr";
mdp = "wf3";

Email = prompt("Saisissez votre Email :");
Mdp = prompt("Saisissez votre Mdp :");


if (email === Email && mdp === Mdp) {
    console.log("all good");
}
else {
    if (email === Email) {
        console.log("Mdp wrong");
    }
    else if (mdp === Mdp) {
        console.log("Email wrong");
    }
    else {
        console.log("all wrong");
    }
}

// CORRECTION \\

// // -- BASE DE DONNEES
// var email, mdp;

// email = "wf3@hl-media.fr";
// mdp = "wf3";

// // -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");

// // -- 2. Je vérifie si l'email saisie (emailUser) correspond avec la BDD (email)
// if(emailUser === email) {
//     // -- 2a. Tous est ok, je continue la vérification avec le mot de passe...

//     // -- 2a1. On demande a l'utilisateur son mot de passe
//     var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

//     // -- 2a2. Vérification du mot de passe
//     if(mdpUser === mdp) {
//         alert('Bienvenue !');
//     } else {
//         alert("ATTENTION, nous n'avons pas reconnu votre mot de passe.");
//     }

// } else {
//     // -- 2b. Les emails ne correspondent pas...
//     alert("ATTENTION, nous n'avons pas reconnu votre adresse email.");
// }

// 2eme SOLUTION \\

// -- Exemple avec les Fonctions

// function monUtilisateurEstCorrect(emailUser, mdpUser) {
//     if(emailUser === email && mdpUser === mdp) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var emailUser = prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
// var mdpUser = prompt("votre mot de passe ?","<Saisissez votre mot de passe>");

// if(monUtilisateurEstCorrect(emailUser,mdpUser)) {
//     alert('Bienvenue ' + emailUser);
// } else {
//    alert('ATTENTION, email/mot de passe incorrect.');
// }


// LES OPERATEURS LOGIQUE \\

// l'operateur ET &&

/*
    si la combinaison email user et email correspond , ET la combinaison mdpuser et mdp correspond.

    Dans cette condition, les 2 doivent obligatoirement correspondre pour etre validée.
    Ex : if(emailUser == email && mdpUser == mdp) {...}
*/

// L'operateur OU : ||

/*
    Si la combinaison emailUser et email correspond et/OU mdp et mdpUser correspond.

    --> dans cette condition au moin l'une des deux doit correspondre pour etre validée.
     Ex : if(emailUser == email || mdpUser == mdp) {...}
*/

// L'operateur NOT : !

/*
    var monUtilisateurEstApprouve = true;
    if(!monUtilisateurEstApprouve) {...}
    Mon utilisateur n'est pas approuvé.

    Reviens a ecrire :
    if(monUtilisateurEstApprouve == false) {...}
*/





















