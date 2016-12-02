import bookmarksComponent from './bookmarks.component';
import bookmarksService from './bookmarks.service';
import angular from 'angular';

const bookmarksModule = angular
  .module('app.compoments.bookmarks',[])
  .component('bookmarks',bookmarksComponent)
  .service('BookmarksService',bookmarksService)
  .name;

export default bookmarksModule;