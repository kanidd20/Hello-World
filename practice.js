//This is to practice chapter 6 on eloquent Javascript 
//Javascript prototype is fallback

//This is a function untill you call on the new keyword wich turns it into an object
function protorabbit(someType){
    this.type = someType;
}

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
rabbit1.prototype.hiar = "red";


rabbit1.speak("say sometjing");
babyrabbit = rabbit1.mate(rabbit2);

console.log(babyrabbit.gender);
console.log(babyrabbit.teeth);

