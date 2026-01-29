let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);


let sum = 0;
i = 1;
do {
    sum += i;
    i++;
} while (i <= 10);
console.log("Sum:", sum);


i = 2;
do {
    console.log(i);
    i += 2;
} while (i <= 20);


i = 1;
do {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
} while (i <= 10);


let str = "Hello World";
let reversed = "";
i = str.length - 1;
do {
    reversed += str[i];
    i--;
} while (i >= 0);
console.log("Reversed string:", reversed);


let factorial = 1;
i = 1;
do {
    factorial *= i;
    i++;
} while (i <= 5);
console.log("Factorial of 5:", factorial);


let arr = [1, 2, 3, 4, 5];
i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);
