var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var disscussRouter = require('./routes/disscussionrouter');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signoutRouter = require('./routes/signout');
var registerRouter = require('./routes/register');
var courseRouter = require('./routes/course');
var threadRouter = require('./routes/thread');
var authRouter = require('./routes/auth');
var profileRouter = require('./routes/profile');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signinTeacher',authRouter);
app.use('/signinStudent',authRouter);
app.use('/signinParent',authRouter);
app.use('/signupTeacher',registerRouter);
app.use('/signupTeacher',registerRouter);
app.use('/signupParent',registerRouter);
app.use('/profileTeacher',profileRouter);
app.use('/profileStudent',profileRouter);
app.use('/disscuss',disscussRouter);
app.use('/thread',threadRouter);
app.use('/courses',courseRouter);
app.use('/signout',signoutRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
