// lexical scope
/*

Lexical scope, also known as static scope, is a concept in JavaScript that describes
 how variable names are resolved during the compilation phase before the code is executed. 
The scope of a variable is determined by its location in the source code, 
and it is defined by where the variable is declared.

In lexical scoping, the scope of a variable is determined by its surrounding block
 or function during the time when the code is written, not when it is executed. 
 This means that a variable declared inside a block or function is accessible within that block or function,
  as well as any nested blocks or functions, regardless of where the function is invoked.

Here's a simple example to illustrate lexical scoping:

```javascript
function outer() {
  let outerVar = 'I am from outer';

  function inner() {
    let innerVar = 'I am from inner';
    console.log(outerVar); // Accessible because of lexical scope
  }

  inner();
}

outer();
```

In this example, `inner` has access to `outerVar` because it's declared in the outer function, 
and JavaScript uses lexical scoping to determine the scope of variables.

Lexical scoping contrasts with dynamic scoping, where the scope of a variable is determined by 
the current execution context, which can change during runtime. JavaScript uses lexical scoping, 
providing a more predictable and understandable way of handling variable scope.

*/