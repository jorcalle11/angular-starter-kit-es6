import angular from 'angular'
import appComponent from './app.component'
import common from './common/common'
import components from './components/components'

angular
  .module('app',[
    common,
    components
  ])
  .component('root',appComponent)
