import React from 'react';
import './App_40.scss';
import Homepage_40 from './pages/Homepage_40';
import {Switch,Route} from 'react-router-dom'
import ShopPage_40 from './pages/ShopPage_40';
import SigninPage_40 from './pages/SigninPage_40';
import ContactPage_40 from './pages/ContactPage_40';
import Header_40 from './components/Header_40';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: ['https://crown1101.herokuapp.com'],
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crown_40', crown_40_Router);
app.use('/crown2_40', crown2_40_Router);

app.use('/api_40', cors(), api_40_Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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


function App_40() {
  return (
    <div>
      <Header_40 />
      <Switch>
      <Route exact path='/'component={Homepage_40} />
      <Route exact path='/shop_40' component={ShopPage_40} />
      <Route exact path='/contact_40' component={ContactPage_40} />
      <Route exact path='/signin_40' component={SigninPage_40} />
      </Switch>
    </div>
  );
}

export default App_40;
