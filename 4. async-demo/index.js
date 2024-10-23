console.log('Before')
getUser(1, getRepositories);
console.log('After')

function displayCommits(commits) {
    console.log(commits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits)
}

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits)
}

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

function getCommits(commits, callback) {
    setTimeout(() => {
        console.log('Calling Commits API...');
        callback(['commit1', 'commit2', 'commit3'])
    })
}