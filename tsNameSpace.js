// nested name spaces
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateDiameter(dimension) {
            return dimension * PI;
        }
        Circle.calculateDiameter = calculateDiameter;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, height) {
        return width * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
var CircleMath = MyMath.Circle;
var PI = 3.14;
// console.log(MyMath.Circle.calculateDiameter(3)); 
console.log(CircleMath.calculateDiameter(3));
console.log(MyMath.calculateRectangle(3, 19));
console.log(PI);
// to merge all the reference you should write command
// $ tsc --outFile tsNameSpaceModules.js  rectangleMath.ts circleMath.ts tsNameSpaceModules.ts
//                      ||                        ||                                || 
//       <newFile where output will come>  <different files>             <ts file where all code are written>  
// if there is many reference file we can't go on adding name to the file so we can use reference to add reference to the file
// command :
// $ tsc --outFile tsNameSpaceModules.js tsNameSpaceModules.ts
//                  or
// $ tsc tsNameSpaceModules.ts --outFile tsNameSpaceModules.js
