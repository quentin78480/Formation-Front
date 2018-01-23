// LES BOUCLES \\

// -- La Boucle FOR

for(let i = 0 ; i <= 10 ; i++ ) {
    document.write('<p>Instruction executé : <strong>' + i + '</strong></p>')
}


document.write('<hr>');


var j = 1;
while (j<=10) {
    document.write('<p>Instruction executé : <strong>' + j + '</strong></p>')

    // Attention a ne pas oublier l'incrementation
    j++;
}


document.write('<hr>');
// Exercice \\
/* 
    Supposons le tableau suivant :
*/

var Prenoms = ['Jean','Marc','Matthieu','Luc','Pierre','Paul','Jacques','Hugo','Louis','Gustave'];

// -- Consigne : grace a une boucle for afficher la liste des prenoms du tableau ci-dessus dans la console ou sur votre page.


for(let i = 0; i < Prenoms.length ;i++) {
    document.write('<p>Les Prénoms : <strong>' + Prenoms[i] + '</strong></p>')
}

var j = 0;
while (j < Prenoms.length) {
    console.log(Prenoms[j]);
    j++;
}

console.log('--------');
// -- La boucle ForEach
// -- ATTENTION A LA PERFORMANCE !!!

Prenoms.forEach(affichePrenom);
    
function affichePrenom(prenom, index) {
    console.log(prenom);
}








































