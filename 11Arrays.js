// ordered collection of items
// Arrays are created using [] brackets and inside these brackets string values are stored

//et score = [22,44,100,2,49,55]
//console.log(score[3]);

// we can access array index by [input number ]
// we can store any datatype in array
// to find that if any item is array or not we use (Array.isArray(variableName));
// Array is basically an Object
// Array is mutable 
// original array can be modified or changed

//let obj = {};   this is an object literal




/* Array Push-Pop method

push and pop methods are fast as compared to shift and unshift 
 
#PUSH METHOD 

To push an item to the last of an array we use
variable.push("item name");



#POP method 
this method will remove item from last of an array 
variable.pop("item name");
this will also return the removed item 
we can check in the console

// Array shift-Unshift method

#UNSHIFT METHOD 
it will add an item to the starting of an array 
variableName.unshift("itemName");
variableName.unshift("itemName");
variableName.unshift("itemName");

we can add as many items as per requirement


#SHIFT METHOD 
this method will remove an item from starting 
this is same as pop method
variableName.shift("itemName");


#  How to clone array
 let array1 = ["item1","item2"];
 
 1)let array2 = array1.slice(0).concat(["item3","item4"]);  ... concating two arrays
   this method will start from 0th index and will go till last index


 another way
 2)let array2 = [].concat(array1,["item3","item4"]);

 3) let array2 = [...array1,"item3","item4"];  ....... spread operator

 array1.push("item3");



 #FOR LOOP IN ARRAY 
let fruits = ["apple", "mango", "grapes", "banana"];
 for( let i=0; i<=fruits.length-1; i++){
console.log(fruits[i].toUpperCase());
 }

 



*/
