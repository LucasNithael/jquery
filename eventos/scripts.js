

$(document).ready( function() {
   
    // evento click
    $("#div-content p").click(function() {
        $(this).css({
            'color': 'red',
            'font-weight': 'bold'
        });
    });

    //evento de passar mouse: mouseenter
    $("#div-content p").mouseenter(function() {
        $(this).css({
            'color': 'blue',
            'font-weight': 'normal'
        });
    });

    //evento para tirar o mouse: mouseleave
    $("#div-content p").mouseleave(function() {
        $(this).css({
            'color': 'black',
            'font-weight': 'normal'
        });
    });

    // hover
    $("#div-content p").hover(function() {
        $(this).text('Texte Hover');
    
    });

    //segunda forma de usar o evento click
    $("#div-content p").on('click', function() {
        $(this).css({
            'color': 'green',
            'font-weight': 'bold'
        });
    });

    // blur: para quando um elemento perde o foco
    $(".inputs input").blur(function() {
        
        
        $(this).css({
            'background-color': 'green',
        });
    });


})