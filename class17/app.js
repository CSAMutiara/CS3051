process.env.NODE_ENV = process.env.NODE_ENV || "development"

var express = require('./config/express');

var index = require('./routes/index');
var about = require('./routes/about');
var users = require('./routes/users');
var users = require('./routes/courses');

var app = express();

app.use('/', index);
app.use('/about', about);
app.use('/users', users);
app.use('/courses', courses);

var error = require('./config/error_handler');
error(app);

module.exports = app;

// port=27017
// host=amutiara-cs3051-5326061