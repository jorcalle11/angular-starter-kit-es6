class CategoriesController {
  constructor(CategoriesService){
    'ngInject'
    this.CategoriesService = CategoriesService;
  }

  $onInit(){
    this.CategoriesService.getCategories()
      .then(result => this.categories = result);
    
    this.getCurrentCategory = this.CategoriesService.getCurrentCategory.bind(this.CategoriesService);
  }

  onCategorySelected(category){
    this.CategoriesService.setCurrentCategory(category);
  }
}

export default CategoriesController;