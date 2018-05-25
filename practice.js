//This is to practice chapter 6 on eloquent Javascript 
//Javascript prototype is fallback

//This is a function untill you call on the new keyword wich turns it into an object
function protorabbit(someType){
    this.type = someType;
}

//Essentially functions are classes and used as a blueprint for the object
const newrabbit = new protorabbit("killer");
//console.log(newrabbit.type)

function recursion(someNumber){
    if(someNumber == 1){
        return someNumber;
    }
    else{
        return someNumber * recursion(someNumber-1);
    }
}

//You can create an instance of any function by using the new keyword
test = new recursion(5);
console.log(test); // this reurns a function
//Object.getPrototypeOf(function) returns the blueprint of the object
console.log(Object.getPrototypeOf(newrabbit));



//Newer way of creating classes in JS
class improvedRabbit{
    constructor(gender){
        this.gender = gender;
    }

    speak(line){
        console.log(line);
    }
    mate(anotherRabbit){
        
        if(this.gendeer == anotherRabbit.gender){
            console.log("these two rabbits cannot mate you dingus");
        }
        else{
            console.log("The two rabbits have mated");
            let newRabbit = new improvedRabbit("male");
            return newRabbit;
        }

    }

}

//You can add members with the prototype function, now ever rabbit will have yello teeth
improvedRabbit.prototype.teeth = "yellow";
;

const rabbit1 = new improvedRabbit("female");
const rabbit2 = new improvedRabbit("male");


rabbit1.speak("say sometjing");
babyrabbit = rabbit1.mate(rabbit2);

console.log(babyrabbit.gender);
console.log(babyrabbit.teeth);


let literalObj = {
    name: "this is a name"
}

newArr = [1,2,3,4];

str = newArr.toString();
console.log(newArr);

Array.prototype.toString = function (){
   return "The string method has been changed";
}

function whatever(){
    console.log("whatever");
    return 5;

}


console.log(whatever()); // If you dont use parenthesis then it returns the function but if you do it returns the return result


//This is a testing of closures 
let t = 5;

function add(){
    
    function inner(){
        console.log(5);
    }
    
    return t*2;
}
t = 10;

const newobj = new add("whatever");
