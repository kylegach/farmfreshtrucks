var gulp   = require('gulp');
var config = require('../config').uglifyJS;
var rename = require('gulp-rename');
var size   = require('gulp-sizereport');
var uglify = require('gulp-uglify');

gulp.task('uglifyJS', function () {
  return gulp.src(config.src)
  	.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(size());
});



