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

var validateEmail = email => {
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

let nom     = $('#nom');
let prenom  = $('#prenom');
let email   = $('#email');
let tel     = $('#tel');
let tbody   = $('tbody');
var EMAIL = new Array();

// -- Initialisation de jQuery
$(() => {

    // -- Ecouter a quel moment est soumis notre formulaire
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);
    $('#contact').on('submit', e => {

        // -- Neutraliser la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        // -- Vérification de chaque champ

            // -- 1. Vérification du Nom
            if(nom.val().length === 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

        // -- 2. Vérification du Prénom
        if(prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre prénom</p>').appendTo(prenom.parent());
        } else {
            prenom.parent().addClass('has-success');
        }

        // -- 3. Vérification du Mail
        if(!validateEmail(email.val())) {
            email.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre adresse email</p>')
                .appendTo(email.parent());
        } else {
            email.parent().addClass('has-success');
        }

        // -- 4. Vérification du Numéro de Téléphone
        if(!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>')
                .appendTo(tel.parent());
        } else {
            tel.parent().addClass('has-success');
        }

        function verifification(){
            for(let i = 0; i < tbody.length ;i++){
                if($('th').find('email').eq(i).val() === email ) {
                    return verif = false;
                }
                else{
                    return verif= true;
                }
            }
        }

        verif = verifification();
        console.log(verif);
        
        var compteur = 0;
        // -- Je vérifie si mon formulaire comporte des erreurs.
        if($('#contact').find('.has-error').length === 0 && verif) {
            $('.alert-contact').css('display', 'block');
            $('.aucuncontact').css('display', 'none');
            $('tbody').prepend('<tr>');
            $('tbody').find('tr').eq(compteur).append('<th>'+nom.val()+'</th>'+'<th>'+prenom.val()+'</th>'+'<th>'+email.val()+'</th>'+'<th>'+tel.val()+'</th>');
            compteur += 1;

            
        } else {

            $('#contact').prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre
                    demande. Vérifiez vos informations.
                </div>
            `);

        }
    });

});

















































