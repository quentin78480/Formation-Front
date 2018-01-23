/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// var PremierTrimestre    = [Noms, Moyennes]
// var Noms             = [Prenom,Nom]
// var Moyennes         = [Matiere, Notes]
// var Prenom      = ["a","b","c","d","e"]
// var Nom         = ["z","x","w","y","t"]
// var Matiere     = ["p","o","i","u","m"]
// var Notes       = ["1","2","3","4","5"]

document.write();


// var PremierTrimestre = [
//     Noms = {
//         Prenom : 'Robin',
//         Nom : 'Callet'
//     },
//     Moyennes = {
//         Matiere : 'Math','français', 'Anglais',
//         Notes : "5", "4", "2",
//     }
//     Noms = {
//         Prenom : 'Robert',
//         Nom : 'Bouif'
//     },
//     Moyennes = {
//         Matiere : 'Math', 'Anglais', 'Espagnol',
//         Notes : "5", "12", "14",
//     }
//     Noms = {
//         Prenom : 'Louis',
//         Nom : 'Marqui'
//     },
//     Moyennes = {
//         Matiere : 'Math', 'français', 'Espagnol',
//         Notes : "5", "14", "8",
//     },
//     Noms = {
//         Prenom : 'Eudes',
//         Nom : 'Sourtar'
//     },
//     Moyennes = {
//         Matiere : 'Math', 'Anglais', 'Allemand',
//         Notes : "5", "16", "14",
//     },
//     Noms = {
//         Prenom : 'Rafael',
//         Nom : 'Philipo'
//     },
//     Moyennes = {
//         Matiere : 'Math', 'français', 'Allemand',
//         Notes : "5", "20", "14",
//     },
// ];



// CORRECTION \\

var PremierTrimestre = [

    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais : 4,
            math     : 6,
            physique : 18
        }
    },
    {
        prenom  : "Maxime",
        nom     : "JOYES",
        moyenne : {
            francais : 4,
            math     : 5,
            physique : 12,
            svt      : 15
        }
    },
    {
        prenom  : "John",
        nom     : "GARCIA",
        moyenne : {
            francais : 4,
            math     : 13,
            physique : 12,
            espagnol : 19
        }
    },
    {
        prenom  : "Hana",
        nom     : "MATTEI",
        moyenne : {
            francais : 14,
            math     : 13,
            physique : 13,
            anglais  : 16
        }
    }

];





// A = PremierTrimestre[0];
// console.log(A);
// A = Array.from(PremierTrimestre[0].moyenne)
// console.log(A);





// for(let i = 0; i<PremierTrimestre.length ;i++) {

//     document.write('<p>'+ PremierTrimestre[i].prenom + ' ' + PremierTrimestre[i].nom + '<li>' + PremierTrimestre[1].moyenne + ' Moyenne général : '+  +'</li><p>');
// }



// -- Les flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for (let i = 0 ; i < PremierTrimestre.length ; i++ ) {

    // -- On recupere l'objet etudiant de l'iteration
    let Etudiant = PremierTrimestre[i];
    l(Etudiant);

    var NombreDeMatiere = 0, SommeDesNotes = 0;

        w('<li>');
            w(Etudiant.prenom + ' ' + Etudiant.nom);
            w('<ul>')
                for (let matiere in Etudiant.moyenne) {

                    NombreDeMatiere++;
                    SommeDesNotes += Etudiant.moyenne[matiere];


                    w('<li>')
                        w(matiere + ' : ' + Etudiant.moyenne[matiere]);
                    w('</li>')
                }
                w('<li>')
                    w('<strong> Moyenne Générale :  </strong>' + (SommeDesNotes / NombreDeMatiere).toFixed(2));
                w('</li>')
            w('</ul>')
        w('</li>');
    
}
w('</ol>');











































