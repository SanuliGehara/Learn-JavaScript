const userLeft = false;
const userWatchCatMems = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    } else if (userWatchCatMems) {
        errorCallback({
            name: 'User watching Cat Meme',
            message: 'web development < Cat'
        });
    } else {
        callback('Thumbs up and Subscribe');
    }
};

watchTutorialCallback((message) => {
    console.log('Success: ' + message);
}, (error) => {
    console.log('Error Message ' + error.message);
});