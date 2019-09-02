// let and const 
// var keyword creates global scope of variable
// let keyword creates blocked scope of variable

var userName = "Kush";
console.log(userName);
userName = "Kush Kumar";
console.log(userName);

const level = 30;
console.log(level);
// level = 20 ; // not possible becaure level is of constant data type

// Block Scope
function reset(): void {
    let userName = null;
    console.log(userName); // it will be null because userName has block scope
}
reset();
console.log(userName); // it will print Kush Kumar as userName is global declared

// Arrow functions
console.log("Arrow functions");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(12, 2));

const multiply = (number1: number, number2: number): number => number1 * number2;
console.log(multiply(12, 2));

const greet = (): void => {
    console.log("Hello arrow function with no argument");
};
greet();

const greetFriend = name => console.log(name);
greetFriend("Vidya")

// Default parameters
console.log("Default parameters");
const count = (start: number = 10, end: number = start - 1): void => {
    console.log(start)
    console.log("End", end);
    while (start > 0) {
        start--;
    }
    console.log("count", start);
}
count(2)
count(); // dafault parameter 

// rest and spread (...) operator
// it allows to work with array an list of data
// array is list of object where we store mmultiple values
// list is just a list of value
console.log("rest & spread (...) operator");
const number = [1, 2, 3, 4, -1];
console.log(Math.max(1, 2, 90, -1, 45));// Math.max takes list of number not array
// console.log(Math.max(number)); // error because number is array but Math.max takes list so we use spread oprator to get list
console.log(Math.max(...number));
console.log(number)
console.log(...number)

const makeArray = (name: string, ...args: number[]) => {
    return args;
}
console.log(makeArray("kush", 1, 2, 3, 4, 5));

// more example of rest operator
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
printInfo("kush", 23);
function printInfo1(...info: [string, number]) { // it takes only to argument 1st string and 2nd number order maters
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfo1("kush", 23);

// Destructuring of array
console.log("Destructuring of array ");
const myHobiees = ["Cooking", "Eating", "Sports", "Gaming"];
const [hobby1, hobby2] = myHobiees; // destructoring of myHobiees array
console.log(hobby1, hobby2);
console.log(...myHobiees);

// Destructuring of object
console.log("Destructuring of object");
const userDatas = { username: "kush", userAge: 23 };
const { username, userAge: myage } = userDatas; // myage is alised for the userAge
console.log("username is "+username+" and age is "+myage);

// Templates literals
console.log("Templates literals");
const myName = "Kush";
console.log(`Hello ${myName}`)