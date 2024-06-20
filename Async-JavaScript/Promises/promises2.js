const userLeft = false;
const userWatchCatMems = false;

function watchTutorialCallback() {
    // return a Promise - --------- producing code--------
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchCatMems) {
            reject({
                name: 'User watching Cat Meme',
                message: 'web development < Cat'
            });
        } else {
            resolve('Thumbs up and Subscribe');
        }
    });

};

watchTutorialCallback()  // -------- consuming code------
    .then(message => console.log('Success: ' + message))
    .catch(error => console.log('Error Message: ' + error.message));