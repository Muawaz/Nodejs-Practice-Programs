console.log('Before')
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commit => console.log(commit))
    .catch(err => console.log('Error : ', err.message))


console.log('After')

// function displayCommits(commits) {
//     console.log(commits);
// }

// function getCommits(repos) {
//     getCommits(repos, displayCommits)
// }

// function getRepositories(user) {
//     getRepositories(user.gitHubUsername, getCommits)
// }

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading user from the Database');
            resolve({ id: id, gitHubUsername: 'Muawaz' });
        }, 2000);
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling github API...')
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    })
}

function getCommits(commits) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Commits API...');
            resolve(['commit1', 'commit2', 'commit3'])
        }, 2000)
    })
}