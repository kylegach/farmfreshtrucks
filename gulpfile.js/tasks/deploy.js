var gulp    = require('gulp');
var config  = require('../config').deploy
var open    = require('open');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['production-build'], function() {
  return gulp.src(config.src)
    .pipe(ghPages())
    .on('end', function(){
      open(config.url);
    })
});
