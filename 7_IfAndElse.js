//falsy  value 

//false
//null
//undefined
//""
// 0

// except falsy values all other values are truthy values 

// if else statement 
/*
let age = 0;

if(age>=18){
    console.log("Every citizen can vote")
}
else{
    console.log("You cannot vote");
}
*/

// NESTED IF ELSE 

// we write another if else statement into else block eg:
// prompt box is used to take an input from user 

let winningNumber = 22;
let userGuess = +prompt("You picked");  // to execute this write this code in .html extension

if(userGuess === winningNumber){
    console.log("You picked a right number");
}
else{
    if(userGuess<winningNumber){
        console.log("You picked a lesser number");
    }
    else{
        console.log("you picked a higher number");
    }
    
}