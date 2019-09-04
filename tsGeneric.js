// Generic
function call(data) {
    return data;
}
console.log(call("kush").length);
console.log(call({ name: "kush", age: 23 })); // .length does not works on json
console.log(call(43)); // .length does not work on number

// Better Generic to check
function BetterCall<T>(data:T){
    return data;
}
console.log(BetterCall("KushKumarSingh").length);
console.log(BetterCall(434));
console.log(BetterCall({name:"kush",age:23}));

// Build in Generic
const testResult:Array<number> = [1.2,3.4]
testResult.push(3.2);
