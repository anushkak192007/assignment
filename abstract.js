class NumberOperation {
    constructor() {
        if (this.constructor === NumberOperation) {
            throw new Error("Cannot create instance of abstract class");
        }
    }

    calculate(a, b) {
        throw new Error("Method 'calculate()' must be implemented");
    }
}


class Addition extends NumberOperation {
    calculate(a, b) {
        return a + b;
    }
}

class Multiplication extends NumberOperation {
    calculate(a, b) {
        return a * b;
    }
}

const add = new Addition();
console.log("Addition:", add.calculate(10, 5));

const multiply = new Multiplication();
console.log("Multiplication:", multiply.calculate(10, 5));