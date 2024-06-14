//     EVENTS      //

var button = document.getElementById('button');
var output = document.getElementById('output');
button.addEventListener('click', buttonClick);

function buttonClick(event) {
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('body').style.backgroundColor = '#f4f4f4';

    console.log(event);
    console.log(event.offsetX);
    console.log(event.offsetY);

    output.innerHTML = '<h3> #offsetX: ' + event.offsetX + '</h3>';
    output.innerHTML += '<h3> #offsetY: ' + event.offsetY + '</h3>';
    document.querySelector('body').style.backgroundColor = 'rgb(' + event.offsetX + ',' + event.offsetY + ',40)';
}

// --------------- MOUSE EVENTS ----------------------- //

// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

var box = document.getElementById('box');
box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

box.addEventListener('mousemove', runEvent)  //hover over the box - box color changes


// ----------------- KEYBOARD EVENTS ----------------------- //
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>offsetX: ' + e.offsetX + '</h3><h3>offsetY: ' + e.offsetY;
    document.querySelector('#main').style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ',40)';
}

var input = document.querySelector('input[type="text"]');
// input.addEventListener('keydown',formEvents);
// input.addEventListener('keyup',formEvents);
input.addEventListener('input', formEvents);

function formEvents(e) {
    console.log('Event type: ' + e.type);
    output.innerHTML = '<h3> Text: ' + e.target.value + '</h3>';
}

var select = document.querySelector('select');
// select.addEventListener('input',
//     function (e) {
//         console.log('Event type from <select>: ' + e.type+ '| value: '+ e.target.value);
//     });

select.addEventListener('change', function (e) {
    console.log('Changed!');
    console.log(e.target.value);
});

var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    output.innerHTML = '<h3> Input: ' + input.value + '</h3><h3>Select: '
        + select.value + '</h3>'
    console.log('submitted!');
});

