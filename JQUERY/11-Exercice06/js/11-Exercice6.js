
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
var search = $('#search');


$(function(){

    $('#search').on('change',function(){
        $('.membre').remove();

        $.getJSON('https://jsonplaceholder.typicode.com/users', function(articles) {

            for(let i = 0 ; i < articles.length ; i++){

                // -- Permet de fonctionner meme si il y a un probleme de majuscule

                var LowerSearch     = search.val().toLowerCase();
                var LowerName       = articles[i].name.toLowerCase();
                var LowerUsername   = articles[i].username.toLowerCase();
                var LowerEmail      = articles[i].email.toLowerCase();
                var Phone           = articles[i].phone;

                TestLowerName       = LowerName.indexOf(LowerSearch);
                TestLowerUsername   = LowerUsername.indexOf(LowerSearch);
                TestLowerEmail      = LowerEmail.indexOf(LowerSearch);
                TestPhone           = Phone.indexOf(LowerSearch);

                if(TestLowerName > -1 || TestLowerUsername > -1 ||TestLowerEmail > -1 ||  TestPhone > -1){
                    $(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>${articles[i].name}</p>
                                <p>${articles[i].username}</p>
                                <p>${articles[i].email}</p>
                                <p>${articles[i].phone}</p>
                            </div>
                        </div>
                    `).appendTo($('.contenu-page'));
                       
                } else{
                    console.log('non');
                };
            }
            Search = search.val().toString()
            if(Search.length == 0){
                $('.membre').remove()
            }
                    
        })
                
    });
    $('#search').on('input',function(){
        let keyword = $(this).val();
        $('p').unmark().mark(keyword);
    }) 
});

        







    
    
    
    





































































