jQuery( function($) {
    body = $('body')
    body.addClass('d-flex flex-column justify-content-center align-items-center')

    content = $('.content')

    p = content.find('p')
    p.addClass('text-center')

    // Capturando o texto do parágrafo e alterando
    texto = p.text() + ' <strong>Alterado pelo jQuery</strong>'
    p.html(texto)

    //segunda forma
    p.append(' <strong>Alterado pelo jQuery</strong>')

    // Pegando primeira div da classe images
    $('.images:first').append('<p>Primeira Tag P</p> <p>Segunda Tag P</p> <p>Terceira Tag P</p> ')

    // pegando a primeira tag p de images
    $('.images:first p:first').css('color', 'red')

    // pegando a segunda tag p de images
    $('.images:first p').eq(1).css('color', 'blue')

    // pegango a última tag p de images
    $('.images:first p:last').css('color', 'green')

    // pegando todas tag p de images
    $('.images:first p').css('font-size', '20px')

    // adicionando class btn do bootstrap as tag a
    $('.buttons a').addClass('btn btn-success')

    //Removendo class btn do bootstrap as tag a
    //$('.buttons a').removeClass('btn')

    
})

// Segunda maneira de iniciar o jQuery
// $(document).ready( function() {
   
// })