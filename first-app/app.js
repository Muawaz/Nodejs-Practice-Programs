
const fs = require('fs')

// Sync / blocking
// const files = fs.readdirSync('./')
// console.log(files);


//Async / Non-blocking
fs.readdir('./', function(err, files) {
    if (err) console.log('Error : ', err);
    else console.log('Results : ', files);
})