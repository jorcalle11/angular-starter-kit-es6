class BookmarksController {
  constructor(BookmarksService,CategoriesService) {
    'ngInject'

    this.BookmarksService = BookmarksService;
    this.CategoriesService = CategoriesService;
  }

  $onInit(){
    this.BookmarksService.getBookmarks()
      .then(result => this.bookmarks = result)
    
    this.getCurrentCategory = this.CategoriesService.getCurrentCategory.bind(this.CategoriesService);
  }
}

export default BookmarksController;