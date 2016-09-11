import template from './category-item.html'
import './category-item.styl'

const categoryItemComponent = {
  bindings: {
    category: '<',
    selectCategory: '&',
    idSelected: '<'
  },
  template
}

export default categoryItemComponent;