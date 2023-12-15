jQuery( function($) {
    li = $('li') // seletor com tag
    id = $('#myImage1') // seletor com id
    clas = $('.myClass') // seletor com classe

    console.log(li)
    console.log(id)
    console.log(clas)

    li.first().text('Item alterado pelo jQuery')
})