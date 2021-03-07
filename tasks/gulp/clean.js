const gulp = require('gulp')
const clean = require('gulp-clean')
const logger = require('gulp-logger')

gulp.task('clean', () => {
  const toDelete = ['dist', 'src/public', 'src/assets', 'src/includes']

  return gulp.src(toDelete, { allowEmpty: true })
    .pipe(logger({
      before: 'Cleaning ' + toDelete,
      after: 'Cleaning completed'
    }))
    .pipe(clean({ read: false }))
})
