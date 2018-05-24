Object.prototype.toString = function(){
    console.log("This is a test");
}

arr = [1,2,3];


Array.prototype.toString = function(){
    console.log("The string has been overwritten")
}


console.log(arr.toString()); //This will print out hello world instead of printing out string like it normall does
