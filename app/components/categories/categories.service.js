class CategoriesService {
  constructor($q){
    'ngInject'
    this.$q = $q;
    this.currentCategory = null;
    this.categories = [
      { id:0, name: 'Development' },
      { id:1, name: 'Design' },
      { id:2, name: 'Humor' },
      { id:3, name: 'Marketing' },
      { id:4, name: 'Technology' }
    ]
  }

  getCategories(){
    return this.$q.when(this.categories);
  }

  setCurrentCategory(category){
    this.currentCategory = category;
  }

  getCurrentCategory(){
    return this.currentCategory;
  }
}

export default CategoriesService;