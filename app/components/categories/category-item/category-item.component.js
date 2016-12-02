import template from './category-item.html'
import './category-item.styl'

const categoryItemComponent = {
  bindings: {
    category: '<',
    selectCategory: '&',
    currentCategory: '<'
  },
  template
}

export default categoryItemComponent;