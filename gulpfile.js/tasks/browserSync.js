var gulp        = require('gulp');
var config      = require('../config').browserSync;
var browserSync = require('browser-sync');

gulp.task('browserSync', ['watchify'], function() {
  browserSync(config);
});
