//syntax of if else is same as other languages here

A =1;


if(A=="1")//here we used ""=="" so it will only check whether A is 1 or not there it will not care about the data type thats why the output will be hey
{
console.log("hey");
}
else{
    console.log("ho");
}
//--------------------------------------------------------------------------------------------------------------

if(A==="1")//here we used "==="so it will check whether A is 1 or not and also will consider datatype here 1 is string and 1 inside A is integer so it will throw false and ho will be printed
{
console.log("hey");
}
else{
    console.log("ho");
}


//ONE LINE if else

//Syntax= condition ? expressionIfTrue : expressionIfFalse;


A=="1" ? console.log("true") : console.log("false");//here the output will be true according to the condition and syntax

//else things with if else like nested if else and if else ladder are also same as other languages