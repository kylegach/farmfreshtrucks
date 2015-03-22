var gulp     = require('gulp');
var config   = require('../config').server;
var compress = require('compression');
var express  = require('express');
var logger   = require('morgan');
var open     = require('open');
var gutil    = require('gulp-util');

gulp.task('production-server',  function() {
  var url = 'http://localhost:' + config.port;

  express()
    .use(compress())
    .use(logger(config.logLevel))
    .use('/', express.static(config.root, config.staticOptions))
    .listen(config.port)

  gutil.log('production server started on ' + gutil.colors.green(url));
  open(url);
});
