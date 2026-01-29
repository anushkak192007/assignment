// Example1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example2
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum:", sum);

// Example3
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Example4
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Example5
let str = "Hello World";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);

// Example6
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log("Factorial of 5:", factorial);

// Example7
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
