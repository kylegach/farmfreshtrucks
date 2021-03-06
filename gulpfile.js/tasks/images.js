var gulp        = require('gulp');
var config      = require('../config').images;
var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var imagemin    = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
