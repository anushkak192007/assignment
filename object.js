function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
console.log(typeof(Person));
console.log(Person);
console.log(Person());

const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
console.log(typeof(myFather));
