let b1 = document.querySelector('.btn1')
b1.onclick = function(){
    alert('YOU JUST PRESSed ME :)')
}

// EXAMPLE 3

let a1 = document.querySelector('.aLink')

function testing(){
    console.log('MOUSE HOVER')
}

a1.onmouseover = testing
a1.onclick = function(){
    console.log('You clicked this event!')
}// EXAMPLE 4

let mouse = document.querySelector('.mouseOut')
mouse.onmouseout = function(){
    console.log('MOUSE OUT!')
}

// EXAMPLE 5

let b2 = document.querySelector('.btn2')
b2.addEventListener('click', function(){
    alert('Hey there!')
})

// EXAMPLE 6
let btnColor = document.querySelector('.btnColor')
let divColor = document.querySelector('.divColor')

function randomRGB(){
    let randomRed = Math.floor(Math.random()*255)
    let randomGreen = Math.floor(Math.random()*255)
    let randomBlue = Math.floor(Math.random()*255)
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}
btnColor.addEventListener('click', function(){
    divColor.style.backgroundColor = randomRGB()
})

// EXAMPLE 7
let para = document.querySelector('.pmouse')
let btn3 = document.querySelector('.btn3')

function hover1(){
    para.innertHTML += 'Mouse Over <br>'
}

function click1(){
    para.innerHTML += 'Clicked! <br>'
}

btn3.addEventListener('mouseover', hover1)
btn3.addEventListener('dblclick', click1)

// EXAMPLE 10
let inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown', function(){
    console.log('KEYDOWN')
})

// EXAMPLE 11
let display1 = document.querySelector('.display')

window.addEventListener('scroll', function(){
    let pxTop = window.pageYOffset
    display1.innerHTML = `${pxTop} px from the top`
})

// EXAMPLE 12
let scroll = document.querySelector('.GOtop')

window.addEventListener('scroll', function(){
    let pxTop = this.window.pageYOffset
    if (pxTop>=100){
        scroll.style.opacity = '1'
    }
    else{
        scroll.style.opacity = '0'
    }
})

// EXAMPLE 17
let QCCwebsite = document.querySelector('.linkQCC')
QCCwebsite.addEventListener('click', function(e){
    e.preventDefault();
    alert('QCC website is OFF!')
})