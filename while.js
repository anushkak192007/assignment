let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


let j = 2;

while (j <= 10) {
    console.log(j);
    j += 2;
}


let k = 1;

while (k <= 9) {
    console.log(k);
    k += 2;
}

let a = 10;

while (a >= 1) {
    console.log(a);
    a--;
}


let b = 1;
let sum = 0;

while (b <= 5) {
    sum += b;
    b++;
}

console.log("Sum:", sum);


let c = 1;

while (c <= 10) {
    console.log(`5 x ${c} = ${5 * c}`);
    c++;
}


let number = 12345;
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}

console.log("Number of digits:", count);