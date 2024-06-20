const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

// Take all the posts and show in the DOM
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} - ${post.body}</li>`;
        });

        document.querySelector('div').innerHTML = output;
    }, 1000);
}

// create new post
/*NOTE: getPost will be called, Every time a new post created */
function createPost(post, callack) {
    setTimeout(() => {
        posts.push(post);
        callack();  
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts); // calls after 2 seconds
getPosts(); // calls after 1 second 
