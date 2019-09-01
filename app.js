"use strict";
console.log("Learning Type Script (TS)");
// 1) string
var str = "Kush"; // data type will be string as string is being is assigned
// str = 30; // error because in TS str is string type and number data will not be assigned
// 2) Number
var age = 23;
// age = "Kush"; // age data type is number and can't be assigned with string
// 3) boolean
var hasData = true;
// hasData = "Data is present";
// hasData = 0;
//assign type by my own
var myAge; // if not assigned any type to the variable then it is of any data type
myAge = 23;
myAge = "current age 23";
var myFinalAge;
// myFinalAge = 23; // myFinalAge is of strin type
myFinalAge = "current age 23";
var myFinalAge1;
myFinalAge1 = 23;
// myFinalAge1 = "current age 23"; // myFinalAge1 is of number type 
// 4) array
var hobbies = ["Cokking", "Video Game", "Sports"];
// hobbies = [100] // can;t assign number as it is strying type
var hobbies1 = ["Cokking", "Video Game", "Sports", 43, false];
hobbies1 = [100]; // hobbies1 is of type string and number
hobbies1 = [true];
// console.log(typeof(hobbies1));
var hobbies2 = ["Cokking", "Video Game", "Sports"];
hobbies2 = [100]; // hobbies2 is of type any data type
hobbies2 = [true];
// console.log(typeof(hobbies1));
// 5) tuples
var address = ["Bangalore", 560093]; // it of type any[] array type
// tuples are arrays with mixed type and liminated number of items
var address1 = ["Bangalore", 560093]; // it of type tuple type in which 0 index will be string and 1 index will be number type
// in tuple order is importent
// 6) enum
// it makes number more expressive
// it is a keyward
// it is used to define your own type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 20] = "Yellow";
    Color[Color["Brown"] = 21] = "Brown";
})(Color || (Color = {}));
// default the value of oreder of Color will be from 0 onword 
// we can over ride the value by just assigning the value eg: Yellow= 20
// the Brown will be of 21 as the number continus from 20 
var myColor = Color.Red;
console.log("Red", myColor);
var myColor1 = Color.Green;
console.log("Green", myColor1);
var myColor2 = Color.Yellow;
console.log("Yellow", myColor2);
var myColor3 = Color.Brown;
console.log("Brown", myColor3);
// 7) any
var car = "BMW";
console.log(car);
car = { brand: 'BMW', series: 3 };
// 8) functions
function returnMyName() {
    return "Kush";
}
console.log(returnMyName());
function returnMyName1() {
    return "Kush";
    // return 32; // not possible as the return type is assigned to the string
}
console.log(returnMyName1());
// 9) void
function returVoidExample() {
    console.log("Hello To TS"); // as this function does not has any return type
    // return "Hello To TS" // not possible because returVoidExample return nothing
}
// 10) argument type
function multiply(a, b) {
    console.log(a * b);
    return a * b;
}
console.log(multiply(8, 10));
// 11) function types
// in ts function is a type
var myMultiply;
myMultiply = returVoidExample;
myMultiply();
myMultiply = multiply;
myMultiply(5, 2);
// defining a function which can hold the proper function argument type and return type
var customFunction; //this function takes input 2 numbers and return number
// customFunction = returVoidExample; // this will give error because it the function returVoidExample does not take any input and return void
customFunction = multiply;
multiply(10, 29);
// 12) objects
var userData = {
    name: "Kush",
    age: 23,
};
// let compleObject : { data: number[], output: (all: boolean) => number[] } ={
//     data: [3,30,4,5],
//     output: function(all:boolean):number[]{
//         return this.data;
//     }
// }
var compleObject = {
    data: [3, 30, 4, 5],
    output: function (all) {
        return this.data;
    }
};
// 14) union type
var myRealAge;
myRealAge = 23;
myRealAge = "23 is my real age";
// myRealAge = true; // it will give you error as it does not has any data type of boolean  
// check types
var finalValueString = "A string";
if (typeof finalValueString == "string") {
    console.log("Final value is String");
}
// 15) Never type
function neverFunction() {
    throw new Error('An error occured');
}
// 16) nullable types
var letCanBeNull = 12;
letCanBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
console.log("canThisBeAny is of type", typeof canThisBeAny);
canThisBeAny = 13;
console.log("canThisBeAny value is ", canThisBeAny);
canThisBeAny = "any random data";
console.log("canThisBeAny value is ", canThisBeAny);
