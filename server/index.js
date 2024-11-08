



console.log('before')

getUser(1, function(user) {

    getRepositories(user.gitHubUserName, (repos) => {
        console.log("repos", repos)
    })
})

console.log('after')

// callbacks
// promises
// async / await

function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading a user from a database...")
        callback(
            { id: id, gitHubUserName: 'Tom' }
        )
    }, 2000);
    return 1
}


// make this asynchronous 
function getRepositories(username, callback) {
    setTimeout(() => {
        console.log( 'calling github api...')
        callback( [ 'repo1', 'repo2', 'repo3' ] )
    }, 2000)
}