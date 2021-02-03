var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

global.__views = path.resolve(__dirname, './public/views')

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var userRouter = require('./routes/user')
var messageRouter = require('./routes/message')
var forfaitRouter = require('./routes/forfait')
var msgRouter=require('./routes/msg')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter)
app.use('/users',  function(req, res, next) {
    res.sendFile('users.html', { root: __views})
});
app.use('/messages',  function(req, res, next) {
    res.sendFile('messages.html', { root: __views})
});
app.use('/message/:id',  function(req, res, next) {
    res.sendFile('message.html', { root: __views})
});
app.use('/forfaits',  function(req, res, next) {
    res.sendFile('forfaits.html', { root: __views})
});


module.exports = app;
