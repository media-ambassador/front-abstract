const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');
var runSequence = require('run-sequence');

gulp.task('inline-build-components', () => {
    return gulp.src(['./src/app/components/**/*.ts', '!./src/app/components/**/**.spec.ts'])
        .pipe(inlineNg2Template({
            target: 'es5',
            useRelativePaths: true
        }))
        .pipe(gulp.dest('./build/components'));

});

gulp.task('inline-build-pipes', () => {
    return gulp.src(['./src/app/pipes/**/*.ts', '!./src/app/pipes/**/**.spec.ts'])
        .pipe(inlineNg2Template({
            target: 'es5',
            useRelativePaths: true
        }))
        .pipe(gulp.dest('./build/pipes'));

});

gulp.task('inline-build-templates', function(callback) {
    runSequence('inline-build-components',
                'inline-build-pipes',
                callback);
});

gulp.task('copy-styles', function(callback) {
    return gulp.src('./src/styles/**/**.scss')
        .pipe(gulp.dest('./lib/styles'));
});