var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes are blue prints of objects
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 23;
        // hear public userName: string code it declare the property as well as in the constructor also
        // example : public userName : string 
        // this.userName = userName
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Hello Kush');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Kush", "Kush Kumar");
console.log(person);
var names = person.name, userNames = person.userName;
console.log("name is " + names + " and username is " + userNames);
person.printAge();
// person.setType("kush") // not able to acces because it is private method
// inheritance
var Kush = /** @class */ (function (_super) {
    __extends(Kush, _super);
    // name = "KushOdil"    
    function Kush(userName) {
        var _this = _super.call(this, "KushOdil", userName) || this;
        _this.age = 24;
        return _this;
        // console.log(this.type); // Property 'type' is private and only accessible within class 'Person'
    }
    return Kush;
}(Person));
var kush = new Kush("Pratian");
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
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.PI = 3.14;
    Helper.calDiameter = function (diameter) {
        return Helper.PI * diameter;
        // return this.PI * diameter; // getting error  error TS2334: 'this' cannot be referenced in a static property initializer.
    };
    return Helper;
}());
console.log(2 * Helper.PI);
console.log(Helper.calDiameter(3));
// Abstract Classs
// Abstract Classs are marked with the abstract keyword
// it can't be intenciated directoly
// it is used for inheritance
// abstract class must be extended
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 3;
    }
    Project.prototype.calculateBudgut = function () {
        return this.budget * 3;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject;
console.log(newProject);
console.log(newProject.changeName("KUSH"));
console.log(newProject.calculateBudgut());
console.log(newProject);
