(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menulist/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
