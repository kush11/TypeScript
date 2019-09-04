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
