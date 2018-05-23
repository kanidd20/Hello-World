console.log("hello world");

//This is a recursive function that prints out a factorial of the number

function factorial(someNumber) {
    if(someNumber == 1){
        return someNumber
    }else {
        return someNumber * factorial(someNumber -1)
    }
}

console.log(factorial(3));