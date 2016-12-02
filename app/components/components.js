import angular from 'angular'
import categoriesModule from './categories/categories'
import bookmarksModule from './bookmarks/bookmarks';

const components = angular
  .module('app.components',[
    categoriesModule,
    bookmarksModule
  ])
  .name;

export default components;