
const http = require('http')

const server = http.createServer( (req, res) => {
    if( req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if ( req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6]));
        res.end()
    }
})

server.listen(3000)

console.log('Server listening to port 3000...');
