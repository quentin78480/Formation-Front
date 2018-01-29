        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */

// $(function(){
//     $('#MonFormulaire').on('submit', function(e) {

//         // -- permet d'annuler l'action par défaut du submite (la redirection HTML)
//         e.preventDefault();
   
//        $(this).replaceWith('<p>Bonjour ' + $('#fullname').val() + ' !' + '<br>' + 'Ton Email est : ' + $('#email').val() + '<br>' + 'Ton numero de téléphone est : ' + $('#tel').val() + '<br>' + 'Et Voici le message que tu as laissé : ' + '<br>' + 'Sujet : ' + $('#sujet').val() + '<br>' + 'Message : ' +$('#message').val()+ '</p>');
//     });
// })   


// -- Correction

$(function(){
    $('#MonFormulaire').on('submit', function(e) {
        
        // -- Stopper l'envoie du formulaire
        e.preventDefault();

        // -- Récuperation des informations
        let fullname    = $('#fullname').val();
        let email       = $('#email').val();
        let tel         = $('#tel').val();
        let sujet       = $('#sujet').val();
        let message     = $('#message').val();

        // -- Récapitulatif
        $(this).replaceWith('<p>Bonjour <strong>' + fullname + '</strong><em> ( ' + email + ' )</em><br><br>Vous nous avez contacter au sujet de : <strong>' + sujet + '</strong>.<br>Nous reviendrons vers vous dans les plus brefs délais au <strong>' + tel + '</strong><br><br><u>Ci-dessous votre message :</u><br>' + message + '</p>');




    });
})   