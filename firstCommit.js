console.log("hello world");


console.log("Ima print something out up here now");

//This is a recursive function that prints out a factorial of the number

function factorial(someNumber) {
    if(someNumber == 1){
        return someNumber
    }else {
        return someNumber * factorial(someNumber -1)
    }
}

