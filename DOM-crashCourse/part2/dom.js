// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

//---------- parentNode property ------------//
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//--------- parentElement -------------------//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

//------------- childNodes ------------------//
console.log(itemList.childNodes);   //gives as 'Text' for whiteSpaces/line breaks
//-------------- children ------------------//
console.log(itemList.children);  //gives actual children. Ignore whiteSpaces

//------------- firstChild ------------//
console.log(itemList.firstChild);  //text

//----------- firstElementChild ----------//
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = 'coral';

//-------------- lastChild ------------//
console.log(itemList.lastChild);

//------------ lastElementChild ---------//
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color = 'red';

//---------- nextSibling ----------//
console.log(itemList.nextSibling);
//---------- nextElementSibling ----------//
console.log(itemList.nextElementSibling);  //no next sibling element

//-------- previousSibling ---------//
console.log(itemList.previousSibling);
//-------- previousElementSibling ---------//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = 'Yellow';

//------------- CreateElement ------------//

//create a div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'new-div';

// add id
newDiv.id = 'hello';

//create text content
var newDivText = document.createTextNode('Hello world');

//add text to div
newDiv.appendChild(newDivText);

//add newDiv to the html doc
var container = document.querySelector('.container');
var h1 = document.querySelector('#header-title');

container.insertBefore(newDiv,h1);
newDiv.style.marginTop = '20px';
newDiv.style.fontSize = '30px';

console.log(newDiv);