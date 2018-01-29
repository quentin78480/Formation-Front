
    //  <!-- CONSIGNE : Avec l'aide de jQuery, vous devrez :
    
    //  1. A la soumission du formulaire, cacher le formulaire puis :
    //  2. Créer un élément <p>
    //  3. Dans cet élément, afficher : Bonjour <nomcomplet> correspondant 
    //     au nom saisie dans le formulaire.

$('#MonFormulaire').on('submit', function(e) {

    // -- permet d'annuler l'action par défaut du submite (la redirection HTML)
    e.preventDefault();

    // console.log($(this))

    // -- Version Courtes
    // $(this).replaceWith( ' <p>Bonjour ' + $('#nomcomplet').val() + ' !</p>' );
    
    // -- Version Longue
    $("MonFormulaire").hide();

    // -- Exemple 1
    $('<p>').append('Bonjour ' + $('#nomcomplet').val() + ' !').appendTo($('body'));
        
    // -- Exemple 2
    $('Bonjour ' + $('#nomcomplet').val() + ' !').appendTo($('body'));

});






















































































