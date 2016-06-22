var gulp                        =   require('gulp');
var uglify                      =   require('gulp-uglify');
var jshint                      =   require('gulp-jshint');
var concat                      =   require('gulp-concat');
var minifyCSS                   =   require('gulp-minify-css');
var htmlreplace                 =   require('gulp-html-replace');
var rename                      =   require('gulp-rename');

gulp.task('index-replace', function() {
  gulp.src('index2.html')
    .pipe(htmlreplace({
        'css': 'build/styles.min.css',
        'js': 'build/bundle.min.js'
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('js', function () {
   return gulp.src([
	    "js/jquery-1.10.2.js",
	    "js/bootstrap.js",
	    "js/owl.carousel.js",
	    "js/script.js",
	    "js/stickUp.min.js",
	    "js/jquery.corner.js",
	    "js/wow.min.js",
	    "js/classie.js",
	    "js/uiMorphingButton_inflow.js",
	    "js/jquery.magnific-popup.js"])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('bundle.min.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
   return gulp.src([
        "css/bootstrap.min.css",
        "css/general.css",
        "css/gg.css",
        "css/custom.css",
        "css/owl.carousel.css",
        "css/owl.theme.css",
        "css/style.css",
        "css/animate.css",
        "css/magnific-popup.css"])
      .pipe(minifyCSS())
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('build'));
});

gulp.task('build', ['index-replace', 'js', 'css']);
