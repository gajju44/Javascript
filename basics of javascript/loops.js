
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

for (let key in person)//used to iterate over the properties of an object
 {
  console.log(key + ": " + person[key]);
}



//for..of Syntax = for (variable of iterable) {  // code to be executed } 
 
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) //used to iterate iterable objects like arrays, strings, maps, sets
{
  console.log(fruit);
}


//foreach Syntax= array.forEach(function(currentValue, index, array) {// code to be executed});

//currentValue: The current element being processed in the array.
//index (optional): The index of the current element being processed in the array.
//array (optional): The array forEach was called upon.


fruits.forEach(function(fruit) {
  console.log(fruit);
});



fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});


// Using arrow function
fruits.forEach(fruit => console.log(fruit));


let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});

console.log(numbers);
