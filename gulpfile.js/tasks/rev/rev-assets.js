var config = require('../../config');
var gulp   = require('gulp');
var rev    = require('gulp-rev');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', ['build'], function(){
  // See comment below about eot,woff, and ttf
  return gulp.src(config.buildAssets + '/**/**.!(css|js|eot|woff|ttf)')
    .pipe(rev())
    .pipe(gulp.dest(config.buildAssets))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.buildAssets));
});
