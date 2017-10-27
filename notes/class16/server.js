let express = require('express')
let app = express()
app.get('/', function(req, res) {
    res.send('Hello World')
})
app.listen(process.env.PORT, process.env.IP)
console.log('Server running at ' + process.env.IP + ' on port ' + process.env.PORT)
