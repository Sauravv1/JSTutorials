// BLOCK SCOPE vs FUNCTION SCOPE

// let and const are block scope 
// var is function scope 
// that means we can access let and const indise a block scope only 
/* 

eg 

{
 let name = "sam"
 }

 if we write console.log(name); Here we will get an error 
 So in order to access this we have to write inside a block scope

 eg

 {
    const price = 45
    console.log(price);
}


// var can be accessed anywhere in the function
hence it is called global scope or functional scope 
*/