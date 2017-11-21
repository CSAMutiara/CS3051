var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
    //morgan = require('morgan');

module.exports = function() {
    var app = express();
    
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    if (process.env.NODE_ENV === 'development') {
        app.use(logger('dev')); //logger replaces morgan
    } else if (process.env.NODE_ENV === 'production') {
    }
    return app;
};