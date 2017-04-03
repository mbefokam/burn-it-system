var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');


require('./app_api/models/db');
require('./app_api/config/passport');

var nutritionix = require('./app_api/routes/nutritionix');
var main = require('./app_api/routes/main');
var user = require('./app_api/routes/users');
var routesApi = require('./app_api/routes/index');
var savedfood = require('./app_api/routes/savedfood');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routesApi);
app.use('/api/nutritionix', nutritionix);
app.use('/api/user', user);
app.use('/api/main', main);
app.use('/api/savedfood', savedfood);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;