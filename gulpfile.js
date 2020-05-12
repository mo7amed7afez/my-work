var gulp    = require('gulp'),
    concat  = require('gulp-concat'),               // collect file
    prefix  = require('gulp-autoprefixer')          // add prefixer
    sass    = require('gulp-sass'),                 // compile sass
    pug     = require('gulp-pug'),                  // compile pug
    uglify  = require('gulp-uglify'),               // minify js
    notify  = require('gulp-notify'),               // for message
    image   = require('gulp-image'),                // for image
    zip     = require('gulp-zip'),                  // zip folder
    connect = require('gulp-connect');              // Local Server

// paths
const PATH = {
    html: {src: 'public/views/pug/**/*.pug', dest: 'project/dist/view'},
    css: {src: 'public/sass/**/*.*', dest: 'project/dist/css'},
    js: {src: 'public/js/*.js', dest: 'project/dist/js'},
    image: {src: 'public/images/*.*', dest: 'project/dist/images'},
    font: {src: 'public/fonts/*.*', dest: 'project/dist/fonts'}
};


// Create local server & live reload
gulp.task('connect', function() {
    connect.server({
        root: 'project',
        port: 5050,
        livereload: true
    });
});

// html task ----------------------------
gulp.task('html', function () {
    return gulp.src(PATH.html.src)         // source
        .pipe(pug({pretty: true}))         // compile pug
        .pipe(gulp.dest(PATH.html.dest))   // destination
        .pipe(notify('html is done'))      // show message
        .pipe(connect.reload());           // reload server
});

// css task ------------------------------------
gulp.task('css', function () {
    return gulp.src(PATH.css.src)               // source
        .pipe(sass({outputStyle: 'expanded'}))  // compile sass
        .pipe(prefix())                         // prefixer
        .pipe(gulp.dest(PATH.css.dest))        // destination
        .pipe(connect.reload());               // reload server
});

// js tasks ------------------------------------
gulp.task('js', function () {
    return gulp.src(PATH.js.src)               // source
        .pipe(gulp.dest(PATH.js.dest))        // destination
        .pipe(connect.reload());               // reload server
});

// image task ----------------------------------
gulp.task('image', function () {
    return gulp.src(PATH.image.src)               // source
        .pipe(image())                            // image
        .pipe(gulp.dest(PATH.image.dest))        // destination
        .pipe(connect.reload());               // reload server
});

// font task ------------------------------------
gulp.task('font', function () {
    return gulp.src(PATH.font.src)               // source
        .pipe(gulp.dest(PATH.font.dest))        // destination
        .pipe(connect.reload());               // reload server
});

// watch task ----------------------------------
gulp.task('watch', function () {
    gulp.watch(PATH.html.src, gulp.series('html'));    // html watcher
    gulp.watch(PATH.css.src, gulp.series('css'));      // css watcher
    gulp.watch(PATH.js.src, gulp.series('js'));        // js watcher
    gulp.watch(PATH.font.src, gulp.series('font'));    // font watcher
    gulp.watch(PATH.image.src, gulp.series('image'));  // image watcher
});