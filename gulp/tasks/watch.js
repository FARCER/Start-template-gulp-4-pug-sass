module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/static/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch(['./dev/static/images/general/**/*.{png,jpg,gif,svg}',
            './dev/static/images/content/**/*.{png,jpg,gif,svg}'], $.gulp.series('img:dev'));
        $.gulp.watch('./dev/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('js:dev'));
    });
};
