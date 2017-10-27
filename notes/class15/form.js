let connect = require('connect')
let app = connect()

let form = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end("<html><body><form action='/reply'><div class='form-group'><label>Name</label><input type='text' class='form-control' placeholder='Add name'></input><input type='submit' value='Submit'></input></div></form></body></html>")
}

let logName = function(req, res, next) {
    console.log(req.method, req.url)
    next()
}

app.use(logName)
app.use("/", form)

app.listen(process.env.PORT, process.env.IP)

