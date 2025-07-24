function getUser(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Fetching the user from the database...');
            resolve({ id: id, gitHubUserName: 'Tom' });
        }, 1000);
    })
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log(`Fetching repositories for ${username}...`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 1000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log(`Fetching commits for ${repo}...`);
        callback(['commit1', 'commit2', 'commit3']);
    }, 1000);
}