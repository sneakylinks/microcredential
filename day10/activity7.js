console.log('This is working!')

let userPick = parseInt(prompt('Pick a number between 0 and 10'));
let check = isNaN(parseInt(userPick));


while (check===true || userPick > 10 || userPick < 0){
    if (check===true){
        userPick = parseInt(prompt('Pick a number between 0 and 10'))
    }
    else if(userPick > 10){
          console.log(`${userPick} is greater than 10. Enter a number less than 10.`)
}
     else if (userPick < 0){
          console.log(`${userPick} is less than 1. Enter a number greater than 1.`)
}
}
else{
    console.log(`You entered ${userPick}`)
 }

