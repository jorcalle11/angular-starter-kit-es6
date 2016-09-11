import angular from 'angular'
import categoriesModule from './categories/categories'

const components = angular
  .module('app.components',[
    categoriesModule
  ])
  .name;

export default components;