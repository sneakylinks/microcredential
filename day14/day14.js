// JQUERY
$('document').ready(function(){
    //example 1
    $('.para2').css('border', 'ridge 5px green')
    $('.a').css({'color':'magenta','padding':'1em 2em','background-color':'lightgreen'})
    $('#pExamples').css('text-align','center')

    // example 2
    $('div > p:odd').css('color','red')
    $('#pExamples > p.para5').css('font-size','1.3em')

    $('ul + div').css('border','orange dotted 1em')

    // example 4
    let p4 = $('.para4')
    p4.prev().css('backgroiund-color', 'pink')
    p4.next().css('background-color', 'gray')
    p4.parent().css('fot-family', 'Arial Black')

    // example 6
    $('.p_append').append('NEW MESSAGE')
    $('.p_prepend').prepend('NEW LINE')

    // example 7
    $('<h3> NEW MESSAGE</h3>')

    // example 10
    $('#btnProperties').click(function(){
        $('.square').css('background-color', 'pink')
    })
    $('#addClass').click(function(){
        $('.square').addClass('btnColor')
    })
    $('#removeClass').click(function(){
        $('.square').removeClass('btnColor')
    })
    $('#toggleClass').click(function(){
        $('.square').toggleClass('btnColor')
    })

// example 12
function hoverCircle(){
    $('.circle').addClass('btnColor')
    $('.circle').html('<p> Circle was hovered! </P>')
}
function resizeWindow(){
    $('.circle').html('<p>Window was resized!</p>')
}
function dblClickCircle(){
    $('.circle').html('<p>Double click!</p>')
}

$('.circle').hover(hoverCircle)
$(window).resize(resizeWindow)
$('.circle').dblclick(dblClickCircle)

})