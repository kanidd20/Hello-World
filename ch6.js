Object.prototype.toString = function(){
    console.log("This is a test");
}

arr = [1,2,3];


Array.prototype.toString = function(){
    console.log("The string has been overwritten")
    return 5;
}


 console.log(arr.toString()); //This will print out hello world instead of printing out string like it normall does

function someFunc(whatever){
    hello: console.log("hello");
}

let obj = {
    item: function(){
        console.log("hello");
    }
}
  
//This is a test of creating objects in javascript
let whatever = {
    cat: function(someString){
        console.log("The first function");
    },
    dog: function(){
        console.log("The second function")
    }

}

let test = new whatever();