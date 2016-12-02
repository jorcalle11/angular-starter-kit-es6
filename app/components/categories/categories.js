import angular from 'angular'
import categoriesComponent from './categories.component'
import categoryItemComponent from './category-item/category-item.component'
import categoriesService from './categories.service'

const categoriesModule = angular
  .module('app.categories',[])
  .component('categories',categoriesComponent)
  .component('categoryItem',categoryItemComponent)
  .service('CategoriesService',categoriesService)
  .name

export default categoriesModule