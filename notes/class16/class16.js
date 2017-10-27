// INSTALLING REQUIRED LIBRARIES

    // package management system

    // npm install express

    // problems with installing library:
        // 1: groupwork: difficult for different machines
        // 2: confusion over what to download
        // 3: different libraries need to download updates
        
// USING A PACKAGE FILE

    // alternative approach is to ship your applicatios withh a list of required libraries and their versions
    
        // package.json
        
        // {
        //   "name": "CS305`",
            
        // }
        
// JSON

    // stands for JS Object Notation
    // inspired by objects in JS
    // few differences
        // keys must be quoted
        // strings must be double-quoted
        
    // JSON:
        // { "foo": "bar" }
    
    // JS:
        // var o = { foo: "bar" };
        
    // Invalid JSON:
        // { "foo": 'bar' }
        
// EXPRESS PACKAGE

    // our server was using
        // 1. HTTP package directly
        // 2. Connect package
    
    // connect have us a simpler API for dealing with HTTP requests and responses
    
    // it gave us also an API for easy mounting and treament of different requests
    
    // express goes a step further and provides a whole Web Applications Framework

// EXPRESS WEB APPLICATIONS FRAMEWORK

    // what is missing from Connect/HTTP?
        
        // parsing of URLs
        // cookies and sessions
        // advanced routing (regex based)
        // template engines
        // error handling
        // middleware plugins
        // and more
        
// USING EXPRESS

    // chnge your server.js
    
    // let express = require('express')
    // let app = express()
    // app.get('/', function(req, res) {
    // res.send('Hello World')
    // })
    // app.listen(process.env.PORT, process.env.IP)
    // console.log('Server running at ' + process.env.IP + ' on port ' + process.env.PORT)

    

