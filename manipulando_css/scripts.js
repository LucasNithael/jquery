
$(document).ready( function() {
   
    // para adicionar class
    $('.buttons a').addClass('buttons_style');
    // para remover class
    $('.buttons a').removeClass('buttons_style');
    // alternar entre add e remove class
    //$('.butttons a').toggleClass('buttons_style');
    // para ocultar elemento
    $('.buttons a').hide();
    // para mostrar elemento
    //$('.buttons a').show();
    // transição para mostrar elemento
    $('.buttons a').fadeIn();
    // transição para ocultar elemento
    $('.buttons a').fadeOut();
    // adicionar propriedades css
    $('.buttons a').css('color', 'red');


})