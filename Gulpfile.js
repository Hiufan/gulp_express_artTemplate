var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// Task
gulp.task('start', function() {
	livereload.listen();
	nodemon({
		script: 'app.js', 
		ext: 'js html',//监听js与html
		env: { 'NODE_ENV': 'development' }
	}).on('restart', function() {
		setTimeout(function(){
			livereload.reload();
			notify('reload finished!');
		},200)
	});
});
