'use strict';
// gulpfile v0.0.2
// add .njk

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var config = require('./config');
// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({

        // nodemon our expressjs server
        script: 'app.js',

        // watch core server file(s) that require server restart on change
        watch: ['app.js', 'dao/*.js', 'api/*.js', 'config/*.js', 'controller/*.js', 'unit/*.js']
    })
        .on('start', function onStart() {
            // ensure start only got called once
            if (!called) { cb(); }
            called = true;
        })
        .on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, BROWSER_SYNC_RELOAD_DELAY);
        });
});

gulp.task('browser-sync', ['nodemon'], function () {

    // for more browser-sync config options: http://www.browsersync.io/docs/options/
    browserSync({

        // informs browser-sync to proxy our expressjs app which would run at the following location
        proxy: 'http://localhost:' + config.localPort +'',

        // informs browser-sync to use the following port for the proxied app
        // notice that the default port is 3000, which would clash with our expressjs
        port: config.browserSyncPort,

        // open the proxied app in chrome
        browser: ['google-chrome']
    });
});

gulp.task('js', function () {
    return gulp.src('static/**/*.js')
    // do stuff to JavaScript files
    //.pipe(uglify())
    //.pipe(gulp.dest('...'));
});

gulp.task('css', function () {
    return gulp.src('static/**/*.css')
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('less', function () {
    return gulp.src(['src/less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('static/css'));
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch('static/**/*.js', ['js', 'bs-reload']);
    gulp.watch('static/**/*.css', ['css', 'bs-reload']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/view/*.html', ['bs-reload']);
    gulp.watch('src/view/*.njk', ['bs-reload']);
    gulp.watch('src/view/component/*.njk', ['bs-reload']);
});