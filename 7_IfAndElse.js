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
/*
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

*/

 // else if condition 
//if 
// else if
// else if 
// else

/*
 In  else if condtion, if one condition is found out to be true then the rest of the conditions 
are not checked further.

*/

//Eg:->

let score = 43;
if(score<33){
    console.log("Fail");
}
else if(score>=33 && score<50){
    console.log("Passed with C class");
}
else if(score>=50 && score<70){
    console.log("Passed with B class");
}
else if(score>=70 && score<90){
    console.log("Passed with A class");

}
else if(score>=90 && score<95){
    console.log("passed with distinction");
}
else{
    console.log("EXCEPTIONAL!! ");
}