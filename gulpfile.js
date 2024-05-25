const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Define a task to watch CSS files and refresh the browser
gulp.task('watch', () => {
  // Initialize BrowserSync with your project's base directory
  browserSync.init({
    server: './', // Change this to your project's base directory if needed
  });

  // Watch CSS files and trigger a reload on change
  gulp.watch('web/styles/*.css').on('change', () => {
    // Reload the browser
    browserSync.reload();
  });
});

// Default task (run 'gulp' in the terminal to start watching)
gulp.task('default', gulp.series('watch'));
