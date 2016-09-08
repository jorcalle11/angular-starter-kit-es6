import angular from 'angular'
import appComponent from './app.component'
import common from './common/common'

angular
  .module('app',[
    common
  ])
  .component('root',appComponent)
