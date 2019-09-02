// let and const 
// var keyword creates global scope of variable
// let keyword creates blocked scope of variable
var userName = "Kush";
console.log(userName);
userName = "Kush Kumar";
console.log(userName);
var level = 30;
console.log(level);
// level = 20 ; // not possible becaure level is of constant data type
// Block Scope
function reset() {
    var userName = null;
    console.log(userName); // it will be null because userName has block scope
}
reset();
console.log(userName); // it will print Kush Kumar as userName is global declared
// Arrow functions
console.log("Arrow functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(12, 2));
var multiply = function (number1, number2) { return number1 * number2; };
console.log(multiply(12, 2));
var greet = function () {
    console.log("Hello arrow function with no argument");
};
greet();
var greetFriend = function (name) { return console.log(name); };
greetFriend("Vidya");
// Default parameters
console.log("Default parameters");
var count = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 1; }
    console.log(start);
    console.log("End", end);
    while (start > 0) {
        start--;
    }
    console.log("count", start);
};
count(2);
count(); // dafault parameter 
// rest and spread (...) operator
// it allows to work with array an list of data
// array is list of object where we store mmultiple values
// list is just a list of value
console.log("rest & spread (...) operator");
var number = [1, 2, 3, 4, -1];
console.log(Math.max(1, 2, 90, -1, 45)); // Math.max takes list of number not array
// console.log(Math.max(number)); // error because number is array but Math.max takes list so we use spread oprator to get list
console.log(Math.max.apply(Math, number));
console.log(number);
console.log.apply(console, number);
var makeArray = function (name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
};
console.log(makeArray("kush", 1, 2, 3, 4, 5));

// more example of rest operator
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
printInfo("kush", 23);
function printInfo1() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo1("kush", 23);

// Destructuring of array
console.log("Destructuring of array ");
var myHobiees = ["Cooking", "Eating", "Sports", "Gaming"];
var hobby1 = myHobiees[0], hobby2 = myHobiees[1]; // destructoring of myHobiees array
console.log(hobby1, hobby2);
console.log.apply(console, myHobiees);

// Destructuring of object
console.log("Destructuring of object");
var userDatas = { username: "kush", userAge: 23 };
var username = userDatas.username, myage = userDatas.userAge; // myage is alised for the userAge
console.log("username is " + username + " and age is " + myage);
// Templates literals
console.log("Templates literals");
var myName = "Kush";
console.log("Hello " + myName);
