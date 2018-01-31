
/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

    Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
    
	Le résultat des contacts correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username, ...
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/

$(function(){

    $.getJSON('https://jsonplaceholder.typicode.com/users', function(articles) {

        $.each(articles, function(indice,articles){

            $(`
                <div class="membre">
                    <div class="membre_informations">
                        <p>${articles.name}</p>
                        <p>${articles.username}</p>
                        <p>${articles.email}</p>
                        <p>${articles.phone}</p>
                    </div>
                </div>
            `).appendTo($('main'));
    });
    $('#markJS').on('input',function(){
        let keyword = $(this).val();
        $('section').unmark().mark(keyword);

        if(articles.name === input.search.val() ){
            console.log("briririri")
        }
});



















































































