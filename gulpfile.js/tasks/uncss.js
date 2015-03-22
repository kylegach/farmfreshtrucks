var gulp   = require('gulp');
var config = require('../config').uncss;
var size   = require('gulp-sizereport');
var uncss  = require('gulp-uncss');

gulp.task('uncss', function() {
	return gulp.src(config.src)
		.pipe(uncss(config.options))
		.pipe(gulp.dest(config.dest))
		.pipe(size());
});
