//--------------- EXAMINE DOCUMENT OBJECT ----------------//
//console.dir(document);
// console.log(document.domain);
// console.log(document.title);
//document.title = 123;   //change the title 

// console.log(document.all);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[7].innerHTML);

// -------------- GETELEMENTBYID------------------- //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');

// console.log(headerTitle.innerHTML);  // inner text with html tags
// console.log(headerTitle.innerText);  // only the visible text 
// console.log(headerTitle.textContent);  // whole text content

// CHANGE TEXT INSIDE THE ELEMENT 
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Hello world!';
// headerTitle.innerHTML += '<span> Hello world</span>';

// CHANGE THE CSS 
// headerTitle.style.color = 'red';
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px black';

//------------------ GETELEMENTBYCLASSNAME --------------//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);

//Gives an Error ****
// items.style.backgroundColor = 'Red';

//*** if we want to change a color of each item, 
//  need to loop through items collection ***
// for (var i=0; i< items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//----------------- GETELEMENTBYTAGNAME ---------------//
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[0].style.backgroundColor = '#f4f4f4';

//------------------ QUERYSELECTOR ---------------------//
// select 1 element by any css selector(id,clasname..) //
var header = document.querySelector('#main-header'); //id
header.style.borderBottom = 'solid 4px #000';

var inputText = document.querySelector('input');  //tagNAme
inputText.value = 'Enter name';

var submit  = document.querySelector('input[type = "submit"]'); //tagName
submit.value = 'Send';

var items1 = document.querySelector('.list-group-item:first-child');
items1.style.color = 'red';

//------------------- QUERYSELECTORALL -------------------//
// select muliple the elements //
var titles = document.querySelectorAll('.title');
console.log(titles);

// var items = document.querySelectorAll('.list-group-item');
// console.log(items);
// for (var i =0; i< items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');  //css selectors
var even = document.querySelectorAll('.list-group-item:nth-child(even)');

for (var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}