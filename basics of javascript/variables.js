
a=1;//we can create variable like this in js it creates a global variable even we created it in a block

//js is dynamically types language so we do not have to specify variable data types here 

/*as example :*/ console.log(typeof(a)); // this will give the type of a as Integer even we didn't specified the data type 

var b=2;//we use var to declare a local variable in a block if specified out side any block it creates global variable
 

let c=3;//let is same as variable the diffrence is that let can not be re-declared

//means as example:
/*if i do this :*/c=4;//there will be no error c will get reassigned
/*but if i do this :*/let c=4; //it will throw error


const d=5; //this will create a constant variable.