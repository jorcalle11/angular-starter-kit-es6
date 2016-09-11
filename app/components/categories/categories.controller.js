class CategoriesController {
  constructor(CategoriesService){
    'ngInject'
    this.CategoriesService = CategoriesService;
    this.idSelected = '-1';
  }

  $onInit(){
    this.CategoriesService.getCategories()
      .then(result => this.categories = result);
  }

  onCategorySelected(category){
    this.idSelected = category.id;
  }
}

export default CategoriesController;