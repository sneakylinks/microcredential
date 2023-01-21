console.log('Nick Israel Just Like The Country')
/* EXAMPLE 1 */
function msg (){
    console.log('Hello New World, All The Boys and Girls!')
}

function printCount (){
    for(let i = 3; i>0; i -=1){
        console.log(`Counting = ${i}`)
    }
}

function greeting (name){
    console.log(`Hello ${name}!`)
}


function upperMessage (message){
    let upper = message.toUpperCase();
    console.log(upper)
}

let user = prompt('Enter a message')
upperMessage(user);

function greeting (firstName;lastName){
    console.log(`Welcome ${firstName ${lastName[0].toUpperCase}}`)
}


function printMsg (message; numCount){
    for(let counter = 1; counter <= numCount; counter++){
        console.log(`Counter = ${Counter} = ${message} `)
    }
}


function isSnakeEyes (dice1, dice 2){
    if (dice1===1 && dice2===1){
        console.log('Snake Eyes!')
    }
    else{
        console.log('Oops! Not snake eyes!')
    }
}


function sumXY(){
    let x = 7, y=3;
    let add = x+y

    return add
    console.log('This line is after the return')
}

function sumNum (num1, num2){
    let sum = num1+num2;
    
    return sum
}
