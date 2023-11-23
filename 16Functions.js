// Function is used to do some work 
// Function is used to replace a repetative block of code in entire code 
// By declaring and calling a function we can replace a huge block of code 
// we can create more than one function in a code 
// syntax:
// function declaratiion
/*

function name (){

}


// In thsi way we create a function 

//EG:

function calculate(num1,num2){
    //return (num1+num2);
    return (num1*num2);
}

console.log(calculate(8,6));

*/

// ODD or EVEN number
/*

function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}
console.log(isEven(8));

*/

//FUNCTION EXPRESSION 

//It is same as normal function 
//Syntax:

/* variable(let,const) function name = function(){
    // code to be executed
 }

 function name();

 */

 // ARROW FUNCTIONS
 // It is almost similar tof function expression
 // Remove function keyword , add => after paranthesis
 // SYNTAX :
 /*
  (const,let) functionName = ()=>{
     code to be executed
 } 
 */

 // WE CAN CREATE FUNCION INSIDE FUNCTION 

 // eg:

 const hello = ()=>{
    console.log("HEY, HOW ARE YOU MATE??");


    let calculate = (num1,num2)=>{
    return num1 + num2 ;
    }
    console.log(calculate(5,49));


    const name = ()=>{
        console.log("Saurav Yadav");
    }
    name();
 }
 hello();
