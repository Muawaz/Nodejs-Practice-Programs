console.log('Before')
const user = getUser(1);
console.log(user);
console.log('After')

// Callbacks
// Promises
// Async/Await

function getUser(id) {
    setTimeout(() => {
        console.log('Reading user from the Database');
        return { id: id, gitHubUsername: 'Muawaz' }
    }, 2000)
    return 1;
}