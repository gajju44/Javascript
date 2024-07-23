
//for loop Syntax= for(initialization; condition;increment/decrement)

for(i=1;i<=10;i++){
    console.log(i);
}


//while loop Syntax= while (condition)

 i = 1;
while (i <=5) {
  console.log(i);
  i++;
}


//do while loop syntax=do { // code to be executed } while (condition);

 i = 1;
do {
  console.log(i);
  i++;
} while (i < 5);


//for..in Syntax =  for(variable in object) { // code to be executed }

let person = {name: "John", age: 30, city: "New York"}; //object

for (let key in person) {
  console.log(key + ": " + person[key]);
}



//for..of Syntax = for (variable of iterable) {  // code to be executed }
 
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
