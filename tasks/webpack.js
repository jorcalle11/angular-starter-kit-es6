import gulp from 'gulp';
import webpack from 'webpack-stream';
import paths from './paths';

const build = () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('../webpack.config')))
    .pipe(gulp.dest(paths.root));
};

export default build;
