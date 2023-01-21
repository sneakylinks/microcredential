console.log(prompt('Type your name'));
/* LOOP */
console.log('The current counter is 1')
console.log('The current counter is 2')
console.log('The current counter is 3')
console.log('The current counter is 4')
console.log('The current counter is 5')

for (let counter = 1; counter <= 5; counter++){
    console.log(`The current counter is ${counter}`)

}
/* Example 2 print number from 100 to 0, incluside, decreasing order in a step of 10 */
for (let y = 100; y >= 0; y -= 10){
    console.log(`y = ${y}`)
}

/* example 3 print number from 0 to 50, exclusive, only even numbers */
let num = parseInt(prompt('Enter a number between 0 and 40: '));

for (num; num<50; num++){
    if (num%2===0){
    console.log(`number = ${num}`)
    }

}
/* example 4 for loop in array */
let cars = ['Testla', 'BMW', 'Maza', 'Nissan', 'Jeep']

for(let i=0; i<cars.length; i++){
    console.log(`car ${i} = ${cars[i]}`)
}
/* example 6*/
let myString = "Prof. WU"
for (let eachLetter of myString){
    console.log(eachLetter)
}

/* while loop */

const SECRET = 8
let guessNum = parseInt(prompt('Guess a number between 0 and 10'))

if (guessNum === SECRET){
    console.log(`Great Job! Number ${guessNum} is the secret number`)
}
else{
    guessNum=parseInt('Wrong! Take a guess again')
}

