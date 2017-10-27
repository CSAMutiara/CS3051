let http = require('http')
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World')
    console.log('response sent')
}).listen(process.env.PORT, process.env.IP)