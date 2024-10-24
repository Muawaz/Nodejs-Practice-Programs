console.log('Before')
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });

// Promise-based Approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commit => console.log(commit))
//     .catch(err => console.log('Error : ', err.message))


// Async-Await Approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error : ', err.message);
    }
}

displayCommits();

console.log('After')

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
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the repos.'))
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