const gulp = require('gulp')

require('./tasks/gulp/browsersync')
require('./tasks/gulp/clean')
require('./tasks/gulp/compile-assets')
require('./tasks/gulp/copy-files')
require('./tasks/gulp/eleventy')

gulp.task('compile', gulp.series('compile:scss'))

gulp.task('copy', gulp.series('copy:kbrinl-frontend', 'copy:assets', 'copy:includes'))

gulp.task('watch', () => {
  gulp.watch(['src/**/*.scss'], gulp.series('compile:scss'))
  gulp.watch(['src/_includes'], gulp.series('copy:includes'))
  gulp.watch(['src/assets'], gulp.series('copy:assets'))
  gulp.watch('src/**/*', gulp.series('eleventy:build'))
})

gulp.task('build', gulp.series('clean', 'copy', 'compile', 'eleventy:build'))

gulp.task('serve', gulp.series('build', gulp.parallel('browsersync', 'watch')))
