var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

global.__views = path.resolve(__dirname, './public/views')

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

const loginRouter = require('./routes/loginAdmin')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter)
app.use('/login', loginRouter)



module.exports = app;
