/* // RUNNING NODE.JS

let http = require('http')
http.creatServer(function(req, rex) {
    
}) <input type='text' class='form-control' placeholder='Add name'>

//THE CONNECT MODEL

//change server.js into*/

let connect = require('connect')
let app = connect()
// app.listen(process.env.PORT, process.env.IP)

// MIDDLEWARE

//connect calls a sequence of funciton on each call
//add (before applisten)

let logger = function(req, res, next) {
    console.log(req.method, req.url)
    next() // if this is removed it won't call the next function helloWorld
}

let helloWorld= function(req, res, next) {
    res.setHeader('Content-Type', 'text.plain')
    res.end('Hello World')
}
let goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Goodbye World')
}

app.use(logger)
app.use(helloWorld)
app.use('/hello', helloWorld)
app.use('/goodbye', goodbyeWorld)

app.listen(process.env.PORT, process.env.IP)

// MIDDLEWARE II

//a connect middleware is a function

// function(req, res, next)

// you can use any number of middleware
// connect processes them in FIFO
// the next  iddleware can be called via next()

// EXAMPLE

// add thhe following before thhe current middleware in server.js

/*  let logger = function(req, res, next) {
        console.log(req.method, req.url)
        next()
    }
    app.use(logger)*/
    
// TARGET URL

// the previous program responded to any input URL
// try GETting another url
    // /hello
    // /goodbye
//what is the response?

// MOUNTING

//connect allows you to mount different middleware to different requested URLS
//replace app.use(helloWorld) into

/*let goodbyeWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Goodbye World')
}
app.use('/hello', helloWorld)
app.use('/goodbye', goodbyeWorld)*/

//what happens now when you try '/hello' and '/goodbye'

// EXERCISE 

// write the required middleware such that
    // it presents a form asking for a name
    //on pressing the button, the name is desplayed


