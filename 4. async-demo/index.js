console.log('Before')
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repositories : ', repos)
    })
});
console.log('After')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from the Database');
        callback({ id: id, gitHubUsername: 'Muawaz' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling github API...')
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}