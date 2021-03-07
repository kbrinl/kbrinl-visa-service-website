const gulp = require('gulp')

require('./tasks/gulp/clean')
require('./tasks/gulp/compile-assets')
require('./tasks/gulp/copy-files')
require('./tasks/gulp/eleventy')

gulp.task('compile', gulp.series('compile:scss'))

gulp.task('copy', gulp.series('copy:kbrinl-frontend', 'copy:assets', 'copy:includes'))

gulp.task('watch', () => {
  gulp.watch(['src/**/*.scss'], gulp.series('compile:scss'))
  gulp.watch(['src/_includes'], gulp.series('copy:includes'))
  gulp.watch(['src/_assets'], gulp.series('copy:assets'))
})

gulp.task('serve', gulp.series('clean', 'copy', 'compile', gulp.parallel('eleventy:serve', 'watch')))
