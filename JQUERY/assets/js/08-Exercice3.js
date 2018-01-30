//      <!---------------------------------------------------/
//         CONSIGNE : 
//         1. Créer un Formulaire HTML permettant le 
//         remplissage d'une Fiche de Contact : Nom, Prénom,
//         Email et le Téléphone.
        
//         2. Après vérification des informations, vous
//         ajouterez le nouveau contact dans un tableau de 
//         contacts.
        
//         3. Vous afficherez ensuite l'ensemble des contacts
//         du tableau sur votre page HTML à la suite de votre
//         formulaire. (Vous utiliserez une <table>)
        
//         4. BONUS : Utilisation de Notification, Local Storage et Bootstrap.
//      \-------------------------------------------------------->

// var validateEmail = email => {
//     var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//     var valid = emailReg.test(email);

//     if(!valid) {
//         return false;
//     } else {
//         return true;
//     }
// }

// var validateTel = tel => {
//     var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
//     var valid = telReg.test(tel);

//     if(!valid) {
//         return false;
//     } else {
//         return true;
//     }
// }

// let nom     = $('#nom');
// let prenom  = $('#prenom');
// let email   = $('#email');
// let tel     = $('#tel');
// let tbody   = $('tbody');
// var EMAIL = new Array();
// var monStockage = localStorage;

// function storage(){
//     incermentation = storage.length + 1;
//     localStorage.setItem(variable,email.val());
//     var EMAIL = localStorage.getItem('variable');
//     console.log(monStockage);
// }


// // -- Initialisation de jQuery
// $(() => {

//     // -- Ecouter a quel moment est soumis notre formulaire
//     // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);
//     $('#contact').on('submit', e => {

//         // -- Neutraliser la redirection HTML5
//         e.preventDefault();

//         // -- Supprimer les différentes erreurs
//         $('#contact .has-error').removeClass('has-error');
//         $('#contact .text-danger').remove();
//         $('#contact .alert-danger').remove();

//         // -- Déclarer les variables à vérifier
//         var nom     = $('#nom');
//         var prenom  = $('#prenom');
//         var email   = $('#email');
//         var tel     = $('#tel');

//         // -- Vérification de chaque champ

//             // -- 1. Vérification du Nom
//             if(nom.val().length === 0) {
//                 nom.parent().addClass('has-error');
//                 $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
//             } else {
//                 nom.parent().addClass('has-success');
//             }

//         // -- 2. Vérification du Prénom
//         if(prenom.val().length === 0) {
//             prenom.parent().addClass('has-error');
//             $('<p class="text-danger">N\'oubliez pas de saisir votre prénom</p>').appendTo(prenom.parent());
//         } else {
//             prenom.parent().addClass('has-success');
//         }

//         // -- 3. Vérification du Mail
//         if(!validateEmail(email.val())) {
//             email.parent().addClass('has-error');
//             $('<p class="text-danger">Vérifiez votre adresse email</p>')
//                 .appendTo(email.parent());
//         } else {
//             email.parent().addClass('has-success');
//         }

//         // -- 4. Vérification du Numéro de Téléphone
//         if(!validateTel(tel.val())) {
//             tel.parent().addClass('has-error');
//             $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>')
//                 .appendTo(tel.parent());
//         } else {
//             tel.parent().addClass('has-success');
//         }

//         function verifification(){
//             for(let i = 0; i < tbody.length ;i++){
//                 if($('th').find('email').eq(i).val() === email ) {
//                     return verif = false;
//                 }
//                 else{
//                     return verif= true;
//                 }
//             }
//         }

//         verif = verifification();
//         console.log(verif);
        
//         var compteur = 0;
//         // -- Je vérifie si mon formulaire comporte des erreurs.
//         if($('#contact').find('.has-error').length === 0 && verif) {
//             $('.alert-contact').css('display', 'block');
//             $('.aucuncontact').css('display', 'none');
//             $('tbody').prepend('<tr>');
//             $('tbody').find('tr').eq(compteur).append('<th>'+nom.val()+'</th>'+'<th>'+prenom.val()+'</th>'+'<th>'+email.val()+'</th>'+'<th>'+tel.val()+'</th>');
//             compteur += 1;

//         monStockage = storage();
//         } else {

//             $('#contact').prepend(`
//                 <div class="alert alert-danger">
//                     Nous n'avons pas été en mesure de valider votre
//                     demande. Vérifiez vos informations.
//                 </div>
//             `);

//         }
//     });

// });





// CORRECTION \\


// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Tableau indexé d'objet Contact
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"
        CollectionDeContacts.push(Contact);
        console.log(CollectionDeContacts);
        
        // -- On cache la phrase : Aucun Contact.
        $('.aucuncontact').hide();

        // -- Mise à jour du HTML
        $(`
            <tr>
                <td>` + Contact.nom + `</td>
                <td>${Contact.prenom}</td>
                <td>${Contact.email}</td>
                <td>${Contact.tel}</td>
            </tr>
        `).appendTo($('#LesContacts > tbody'));

        // -- Réinitialisation du Formulaire
        reinitialisationDuFormulaire();

        // -- Affiche une Notification
        $('.alert-contact').fadeIn().delay(4000).fadeOut();

    }

    function reinitialisationDuFormulaire() {
        //  -- En jQuery 
        $('#contact').trigger('reset');
        $('#contact').get(0).reset();
        $('#contact .form-control').val('');
        
        // -- En Javascript :
        document.getElementById('contact').reset();
    }

    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);
    
        if(!valid) {
            return false;
        } else {
            return true;
        }
    }
    
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        var valid = telReg.test(tel);
    
        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    function unContactEstPresent(Contact) {

        // -- Booleen qui indique la présence d'un contact dans ma collection
        let estPresent = false;

        // -- On parcourt le tableau à la recherche d'une correspondance
        for(let i = 0 ; i < CollectionDeContacts.length ; i++) {

            if(Contact.email === CollectionDeContacts[i].email) {
                // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                estPresent = true;
                // -- On arrête la boucle, plus besoin de poursuivre.
                break;
            }

        }

        // -- On retourne le booleen
        return estPresent;

    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon formulaire
    $('#contact').on('submit', function(e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        var prenom, nom, email, tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email   = $('#email');
        tel     = $('#tel');

        // -- Vérification des informations
        let mesInformationsSontValides = true;

        // -- Vérification du Prénom
        if(prenom.val().length === 0) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Nom
        if(nom.val().length === 0) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Mail
        if(!validateEmail(email.val())) {
            mesInformationsSontValides = false;
        }

        // -- Vérification du Tel
        if(!validateTel(tel.val())) {
            mesInformationsSontValides = false;
        }

        if(mesInformationsSontValides) {

            // -- Tout est correct
            let Contact = {
                //cle       //valeur
                nom         : nom.val(),
                prenom      : prenom.val(),
                email       : email.val(),
                tel         : tel.val()
            };

            /**
             * Si le contact est présent dans la collection, on informe l'utilisateur
             * Sinon, on peut procéder à la suite du traitement.
             */
            if(unContactEstPresent(Contact)) {
                reinitialisationDuFormulaire();
                alert('ATTENTION\nCe contact est déjà présent !');
            } else {
                ajouterContact(Contact);
            }

        } else {

            // -- Tous les champs n'ont pas été remplis.
            alert('ATTENTION\nVeuillez bien remplir tous les champs.');

        }

    })

})
        
        
        







































