const gulp = require('gulp')

gulp.task('copy:assets', () => {
  return gulp.src('src/_assets/**/*')
    .pipe(gulp.dest('src/assets'))
})

gulp.task('copy:includes', () => {
  return gulp.src('src/_includes/**/*.njk')
    .pipe(gulp.dest('src/includes'))
})

gulp.task('copy:kbrinl-frontend-js', () => {
  return gulp.src('node_modules/kbrinl-frontend/kbrinl/all.js')
    .pipe(gulp.dest('src/public'))
})

gulp.task('copy:kbrinl-frontend-assets', () => {
  return gulp.src('node_modules/kbrinl-frontend/kbrinl/assets/**/*')
    .pipe(gulp.dest('src/assets'))
})

gulp.task('copy:kbrinl-frontend-includes', () => {
  return gulp.src('node_modules/kbrinl-frontend/kbrinl/**/*.njk')
    .pipe(gulp.dest('src/includes'))
})

gulp.task('copy:kbrinl-frontend', gulp.series('copy:kbrinl-frontend-assets', 'copy:kbrinl-frontend-js', 'copy:kbrinl-frontend-includes'))
