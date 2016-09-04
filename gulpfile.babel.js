import gulp from 'gulp';
import sequence from 'run-sequence';
import build from './tasks/webpack';
import { server } from './tasks/serve';
import watch from './tasks/watch';

gulp.task('serve',    server);
gulp.task('webpack',  build);
gulp.task('watch',    watch);

gulp.task('default', (done) => {
  sequence('webpack','serve','watch',done)
});
