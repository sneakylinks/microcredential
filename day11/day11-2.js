function weather(temperature){
    if (temperature >= 75){
        return true
    }
    else {
        return false
    }
}

let userWeather = parseInt(prompt('Aske the user to enter a temperature'))
let userT = weather(userWeather);


function lastElement (arrayInput){
    if (arrayInput===undefined){
        return "You didn't enter an array"
    }
    else if (arrayInput.lenght !== 0){
        let lastIndex = arrayInput.lenght - 1
        return arrayInput[lastIndex]
    }
    else{
        return "Array is empty"
    }
}