// classes are blue prints of objects
class Person {
    name: string;
    private type: string;
    protected age: number = 23;

    constructor(name: string, public userName: string) {
        // hear public userName: string code it declare the property as well as in the constructor also
        // example : public userName : string 
        // this.userName = userName
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Hello Kush')
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Kush", "Kush Kumar");
console.log(person);
const { name: names, userName: userNames } = person
console.log(`name is ${names} and username is ${userNames}`);
person.printAge();
// person.setType("kush") // not able to acces because it is private method

// inheritance
class Kush extends Person {
    // name = "KushOdil"    
    constructor(userName: string) {
        super("KushOdil", userName)
        this.age = 24;
        // console.log(this.type); // Property 'type' is private and only accessible within class 'Person'
    }
}
const kush = new Kush("Pratian");
console.log(kush);

// class Plants {
//     private _species: string = "Default";

//     get species() {
//         return this._species;
//     }
//     set species(value: string) {
//         if (value.length > 3) {
//             this._species = value;
//         }
//         else {
//             this._species = "Default"
//         }
//     }
// }

// let plant = new Plants();
// console.log(plant.species= "Rose")

// Static Properties & Methods

class Helper {
    static PI: number = 3.14;
    static calDiameter = (diameter: number): number => {
        return Helper.PI * diameter;
        // return this.PI * diameter; // getting error  error TS2334: 'this' cannot be referenced in a static property initializer.
    }
}
console.log(2 * Helper.PI);
console.log(Helper.calDiameter(3))

// Abstract Classs
// Abstract Classs are marked with the abstract keyword
// it can't be intenciated directoly
// it is used for inheritance
// abstract class must be extended
abstract class Project {
    projectName: string = "Default";
    budget: number = 3;

    abstract changeName(name: string): void;

    calculateBudgut() {
        return this.budget * 3;
    }
}

class ITProject extends Project{
    changeName(name:string):void{
        this.projectName = name;
    }
}

let newProject = new ITProject;
console.log(newProject);
console.log(newProject.changeName("KUSH"));
console.log(newProject.calculateBudgut());
console.log(newProject);