// Interface
// an interface is a contract signed by object which says that i gurantee you that i have certain property function
function greet(person: any): void {
    console.log("welcome", person.name);
    // console.log("Gender is", person.gender); // it will be undefined as gender is not the property od person
}

const person = {
    name: "kush",
    age: 23,
}
greet(person);

// defining an interface to over come to write multiple time the property

interface NamedPerson {
    name: string;
    age?: number; // hear ? indicates the optional arguments
    [propName: string]: any;
    greets(lastName: string): void;
}

// hear {name:string} is the check the person object must have name as property                                 
//                               ||
function greets(person1: { name: string }): void {
    console.log("welcome", person1.name);
}
// an interface is used to write it once in a file interface name is NamedPersion
//                             ||
function changeName(person1: NamedPerson): void {
    person1.name = "KushOdil"
}
const person1: NamedPerson = {
    name: "kushKumar",
    age: 23,
    hobbies: ["Cooking", "Walking"],
    greets(lastName: string) {
        console.log(lastName);
    }
}
changeName(person1)
// changeName({ name: "kushKumar", age: 23 })// it will give error as age is not defined in the interface
greets(person1);
person1.greets("Kumar");

class PersonKush implements NamedPerson {
    name: string;    
    greets(lastName: string) {
        console.log(lastName)
    };    
}
const myPerson = new PersonKush();
myPerson.name="MaxVidya"

// Function Types Interfaces

interface DoubleFunction {
    (value1: number, value2: number): number;
}

let myDoubleFunction: DoubleFunction;
myDoubleFunction = function (value1: number, value2: number): number {
    return value1 + value2;
}
console.log(myDoubleFunction(2, 2));

// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 24,
    name: "Kush",
    greets(lastName:string){
        console.log(lastName);
    }
};
console.log(oldPerson);