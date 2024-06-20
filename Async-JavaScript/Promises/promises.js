const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// Take all the posts and show in the DOM 
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} - ${post.body}</li>`;
        });

        document.querySelector('div').innerHTML = output;
    }, 1000);   // (waits 1 second)
}

// create new post
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000);  //  waits 2 seconds
    });
}

// ------- Async / Await -----------------
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});  // waits

    getPosts();
}
init();

// Async/ Await with Fetch
// async function fetchDetails() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }
// fetchDetails();

// createPost({ title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good Bye!');
});

// fetch data from API - fetch returns promises
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());  //need to format in to json

Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => console.log(values))
    .catch(err => console.log(err));