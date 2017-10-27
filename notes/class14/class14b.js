fs = require('fs')
fs.readFile('/etc/hosts', 'utf8', function (err, data) {
    if (err) {
        return console.log(err)
    }
    console.log(data)
})

let express = require('express')
let app = express();