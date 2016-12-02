class CategoriesService {
  constructor($q){
    'ngInject'

    this.$q = $q;
    this.bookmarks = [
      { id:0, name:'gulp', url: 'http://gulpjs.com', category: 'Development' },
      { id:1, name:'angular', url: 'https://angularjs.org', category: 'Design' },
      { id:2, name:'webpack', url: 'https://webpack.github.io', category: 'Humor' },
      { id:3, name:'visual studio code', url: 'https://code.visualstudio.com', category: 'Marketing' },
      { id:4, name:'materiaize', url: 'http://materializecss.com', category: 'Technology' }
    ]
  }

  getBookmarks(){
    return this.$q.when(this.bookmarks);
  }
}

export default CategoriesService;