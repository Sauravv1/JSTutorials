// PARAMETER DESTRUCTURING 

// Used in objects 
// Frequently used in REACT 

// Parameter destructuring is a feature in JavaScript that allows you to extract 
// values from arrays or objects directly in the parameter list of a function. 

//eg 

// we create an object 

const person = {
    firstName : "Saurav",
    lastName : "Yadav",
    age : 21,
    id : 222
}

const myDetails = ({firstName,lastName,age,id}) =>{
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(id);
}

myDetails(person);

 // This is parameter destructuing 