const arr1=[1,2,3,4,5];
console.log(typeof(arr1))
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(`arr1.length is ${arr1.length}`);

arr1.pop();
console.log(arr1);
console.log(`arr1.length is ${arr1.length}`);

arr1.unshift(1)
console.log(arr1);
console.log(`arr1.length is ${arr1.length}`);

arr1.unshift(6)
console.log(arr1);
console.log(`arr1.length is ${arr1.length}`);

let response=arr1.at(3)
console.log(response)
console.log(typeof(response))


arr1[0]=7;
console.log(arr1);
console.log(`arr1.length is ${arr1.length}`);

const a1=[10,20,30]
const a2=[]