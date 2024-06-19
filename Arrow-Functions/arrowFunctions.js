// NORMAL FUNCTION 1 - no return //
function greeting(name) {
    console.log(`Hello ${name}, How are you?`);
}


// ARRROW FUNCTION
const greeting2 = name => console.log(`Hello ${name}, from arrow function`)

greeting('Sanuli');
greeting2('Sanuli');

 /*           Notes for Arrow Function:  

1. function keyword NOT needed

2. let/const variableName = (argument) => {function body}

3. short hand: curly braces and return keyword NOT needed, 
    return result directly after =>

4. brackets NOT needed in SINGLE parameter function's argument

5. do NOT bind "this" (avoid for methods) or "arguments". 

6. It can NOT be used as constructors or generators            */


// NORMAL FUNCTION 2 - with return
// function sum(num1, num2) {
//     console.log('Inside the function!');
//     return (num1+num2);
// }

// ARROW FUNCTION
const sum = (num1,num2) => {
    console.log('Inside the function!');
    return (num1+num2);
}

// let value = sum(1,10);
// console.log(value);
console.log(sum(1,11));

//-------------- CREATE A DIV AND APPEND TO DOM -----------------
let div = document.createElement('div');
div.setAttribute('id', 'newDiv');
div.style.background = 'yellow';
div.style.width = '200px';
div.style.height = '200px';

div.innerHTML = '<h1 style = "color:red;"> Hello World!</h1>';
document.body.appendChild(div);