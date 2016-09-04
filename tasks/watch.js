import gulp from 'gulp';
import { reload } from './serve';
import paths from './paths';

const watch = () => {
  let allPaths = [].concat([paths.js],paths.html,[paths.styl]);
  gulp.watch(allPaths, ['webpack',reload]);
}

export default watch;
