var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // to deal with chrome sending an extra options request
    }

    next();
});

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('*', function(req, res){
    return res.status(404).json({ message: 'Invalid route!' });
});

module.exports = app;
