/*

In hoisting a function is called before it is declared

this is possible only in Function Declaration and not in function expression or arrow function 

*/

//EG:

//greeting();

//function greeting(){
   // console.log("Good Morning, Saurav");
//}

/*

IF we try to access the variable before creating it then the output will be undefined
but the keyword should be used is VAR otherwise error will arise if we use LET and CONST 
keyword

*/

//EG:

console.log(hello); // undefined 

var hello = "MORNING";

console.log(hello); // morning

