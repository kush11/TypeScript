// nested name spaces
namespace MyMath {
    export namespace Circle {
        const PI = 3.14;
        export function calculateDiameter(dimension: number): number {
            return dimension * PI;
        }
    }
}