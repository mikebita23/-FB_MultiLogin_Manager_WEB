var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

global.__views = path.resolve(__dirname, './public/views')

var indexRouter = require('./routes/index');

//call for administration routes
var adminRouter = require('./routes/admin');
const loginRouter = require('./routes/loginAdmin')
const forfaitRouter = require('./routes/forfaitAdmin');
const messageRouter = require('./routes/messageAdmin');
const prospectRouter = require('./routes/prospectAdmin');
const sessionsRouter = require('./routes/sessionAdmin');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//route for administration
app.use('/login', loginRouter)
app.use('/admin', adminRouter)
app.use('/forfaits', forfaitRouter)
app.use('/messages', messageRouter)
app.use('/prospects', prospectRouter)
app.use('/sessions', sessionsRouter)



module.exports = app;
