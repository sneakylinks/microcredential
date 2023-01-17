/* if, else if, else statement*/

let userPick = prompt('Enter a number or string: ');
let checkInput = isNaN(parseInt(userPick));


if (userPick<=-1){
    console.log(`${userPick} is a negative number`)
}
else if (checkInput){
    console.log(`${userPick} is a string`)
}
else {
    console.log(`${userPick} is a positive number`)
}