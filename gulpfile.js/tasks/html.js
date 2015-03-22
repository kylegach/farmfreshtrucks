var gulp         = require('gulp');
var config       = require('../config').html;
// var handleErrors = require('../lib/handleErrors');
var browserSync  = require('browser-sync');
// var swig         = require('gulp-swig');

gulp.task('html', function() {
  return gulp.src(config.src)
    // .pipe(swig(config.swig))
    // .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
