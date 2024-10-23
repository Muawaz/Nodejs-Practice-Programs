const p = new Promise((resolve, reject) => {
    //Kickoff some async work
    //....
    setTimeout(() => {
        //resolve
        resolve(1)

        //reject
        reject(new Error('message'))
    }, 2000);
})

p
    .then(result => console.log('Result : ', result))
    .catch(err => console.log('Error : ', err.message));