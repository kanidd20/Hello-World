//This is a testing of closures 
let t = 5;

function add(){
    
    //This function is created 
    function inner(){
        console.log(5);
    }
    
    return t*2;
}
t = 10;



const newobj = new add("whatever");
newobj.name = "whatever"; //initializes name into newobj

//creates a new speak method 
newobj.speak = function(){
    console.log("Speak v2");
}



function closureFunction() {
    newobj.speak();
    console.log(newobj.name);
}
var recurs = require('./robot-pathing');

closureFunction(); 

newnewobj = Object.create(newobj); //This inherits from an existing object
console.log(newnewobj.name);

const dummy = function(name){
    this.name = name
    return name;
}

console.log(recurs(4));
