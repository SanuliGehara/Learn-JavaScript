document.getElementById('getText').addEventListener('click', getText);// Get  Text Button
document.getElementById('getUsers').addEventListener('click', getUsers); // Get Json Button
document.getElementById('getPosts').addEventListener('click', getPosts); // Get API Data Button
document.getElementById('addPost').addEventListener('submit', addPost); // Form sumbit button

function getText() {
    // fetch('sample.txt')
    //     .then(function (response) {
    //         return response.text();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //     }) 

    fetch('sample.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

function getUsers() {
    fetch('users.json')
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Users</h2>';

        // Loop through users array
        data.forEach(element => {
            output += `
            <ul class= "list-group mb-4">
                <li class= "list-group-item">ID: ${element.id}</li>
                <li class= "list-group-item">Name: ${element.name}</li>
                <li class= "list-group-item">Email: ${element.email}</li>
            </ul>
            `;
        });

        //set Output to DOM
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Posts</h2>';

        data.forEach(post => {
            output += `
                <div class = "card card-body mb-3">
                    <h3 class = "mb-4">${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `; 
        });

        //set Output to DOM
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function addPost(e) {
    e.preventDefault();

    //get the vlaues from input fields
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then(response => response.json())
    .then(data => console.log(data))
}