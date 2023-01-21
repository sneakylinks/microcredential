// EXAMPLES 1 & 2
console.log('--------EXAMPLES 1 and 2--------')
var fullMoon = false
var species = 'human'

if(fullMoon){
    var species = 'wolf'
    console.log(`FULL MOUN! Lupin is a ${species}`)
}
console.log(`NO full moon! Lupin is a ${species}`)

let msg = 'This is an outside message'

function displayMsg(){
    let msg = 'Hello wWrld!'
    return(msg)
}

// EXAMPLE 3
console.log('-------EXAMPLE 3--------')
let message = 'Hello World!'
console.log(message)
message = 'Good evening'
console.log(message)

// EXAMPLE 5
console.log('-------EXAMPLE 5-------')
for (var i = 0; i<10; i++){
    console.log(i)
}
console.log(`The last value of i is ${i}`)

// EXAMPLE 6
console.log('-------EXAMPLE 6-------')
let sum = function (num1, num2){
    return num1+num2
}
let square = function(num){
    return Math.pow(num,2)
}

//EXAMPLE 7
console.log('-------EXAMPLE 7 -------')
function callTwice(dice){
    dice();
    dice();
}
function rolldice(){
    const roll = Math.trunc(Math.random()*7)
    console.log(roll)
}

callTwice(rolldice)

// EXAMPLE 8 function that returns another function
console.log('-------EXAMPLE 8------')
function makeBetweenFunc(min, max){
    return function(num){

    }
}

// EXAMPLE 10
console.log('-------EXAMPLE 10---------')
const cat = {
    author: 'Mickey',
    color: 'white with brown spots',
    breed: 'unknown',
    meow(){console.log(this.name)}
}

// EXAMPLE 12
console.log('-------EXAMPLE 12------')
const hen = {
    name: 'Helen',
    eggCount: 0,
    layEgg(){this.eggCount++;return 'EGG'}
}
// EXAMPLE 13
console.log('-----EXAMPLE 13------')
function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch(e){
        console.log(e)
        console.log('Please pass a string next time!')
    }
}

// EXAMPLE 14
console.log('--------EXAMPLE 14------')
/* let p1 = document.getElementById ('one')
p1.style.color = 'red' */

// EXAMPLE 15
console.log('--------EXAMPLE 15------')
let ps = document.getElementsByTagName('p')
console.log(ps)


// EXAMPLE 18
console.log('-------EXAMPLE 18------')
let names = document.querySelectorAll('#special .name')
for(let i = 0; i<names.length; i++){
    names[i].style.fontWeight ='bolder'
    names[i].style.fontStyle ='italic'
    names[i].style.fontSize ='2em'
}


// EXAMPLE 17
console.log('-----EXAMPLE 17------')
let myPara = document.createElement('p')

// EXAMPLE 20
console.log('------EXAMPLE 20-----')
let mySentence = document.createTextNode('Appended paragraph')
myPara.appendChild(mySentence)

/* let newP = document.querySelector('.d')
newP.appendChild(myPara) */

// EXAMPLE 22
console.log('--------EXAMPLE 22-------')

/* let div2 = document.querySelector('.d2')
div2.removeChild(div2.children[1]) */

//EXAMPLE 23
console.log('----------EXAMPLE 23---------')

/* let par1 = document.querySelector('.p1')
par1.removeChild(par1.children[1]) */