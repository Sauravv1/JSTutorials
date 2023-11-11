// primitve vs reference data types
/*


#PRIMITVE DATATYPES

When you declare a primitive data type in JavaScript, it is stored on a stack.
 A stack is a simple data structure that the computer uses to store and retrieve data quickly.

A primitive data type on the stack is identified by the variable name 
you used for declaration in your program. 
With each primitive data type you create, data is added to the stack.

To implement this, say we declare a variable, numOne, and give it a value of 50. 
We go on to create another variable, numTwo, and assign it the same value of 50. 
So both variables have the same value.

What happens on the stack is that, 
the computer creates room for numOne and stores its assigned value on the stack. 
When numTwo is created, the computer again creates room, and stores 50 on the stack. 
It does not matter that both variables are assigned the same value.



#REFERENCE DATATYPES


A stack, and a heap. Say we declared an object, for example. 
The object itself is stored on a heap, and its pointer is stored on a stack. 
The pointer is identified by the object's variable name, and points to that object.

Now, we could create a variable, object1, and assign an object to it. 
What if like before, we create another variable object2, and assign it to object1. 
Does that mean another object will be created on the heap? The answer is no.

Since the object already exists on the heap, object2 and object1 will both point to the same object.


Another difference comes in when we update object1. 
If we log both variables to the console, we see that the change affected them both. 
This is because they are pointing to the same object on the heap – 
and updating one variable of course affects the other.




*/