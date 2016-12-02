import gulp from 'gulp';
import serve from 'browser-sync';
import paths from './paths';

export const reload = () => serve.reload();

export const server = () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: paths.root }
  });
};
