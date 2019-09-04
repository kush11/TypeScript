// Interface
// an interface is a contract signed by object which says that i gurantee you that i have certain property function
function greet(person) {
    console.log("welcome", person.name);
    // console.log("Gender is", person.gender); // it will be undefined as gender is not the property od person
}
var person = {
    name: "kush",
    age: 23
};
greet(person);
// hear {name:string} is the check the person object must have name as property                                 
//                               ||
function greets(person1) {
    console.log("welcome", person1.name);
}
// an interface is used to write it once in a file interface name is NamedPersion
//                             ||
function changeName(person1) {
    person1.name = "KushOdil";
}
var person1 = {
    name: "kushKumar",
    age: 23,
    hobbies: ["Cooking", "Walking"],
    greets: function (lastName) {
        console.log(lastName);
    }
};
changeName(person1);
// changeName({ name: "kushKumar", age: 23 })// it will give error as age is not defined in the interface
greets(person1);
person1.greets("Kumar");
var PersonKush = /** @class */ (function () {
    function PersonKush() {
    }
    PersonKush.prototype.greets = function (lastName) {
        console.log(lastName);
    };
    ;
    return PersonKush;
}());
var myPerson = new PersonKush();
myPerson.name = "MaxVidya";
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return value1 + value2;
};
console.log(myDoubleFunction(2, 2));
var oldPerson = {
    age: 24,
    name: "Kush",
    greets: function (lastName) {
        console.log(lastName);
    }
};
console.log(oldPerson);
