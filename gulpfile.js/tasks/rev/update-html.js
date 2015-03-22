var gulp         = require('gulp');
var revCollector = require('gulp-rev-collector');
var config       = require('../../config');

// 5) Update asset references in HTML
gulp.task('update-html', ['rev-css-js-compress'], function(){
  return gulp.src([config.buildDirectory + '/assets/rev-manifest.json', config.buildDirectory + '/**/*.html'])
    .pipe(revCollector())
    .pipe(gulp.dest(config.buildDirectory));
});
