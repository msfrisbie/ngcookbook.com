angular.module('ngcookbookApp')
.directive('navbar', function ($location, $timeout) {
  return {
    restrict: 'E',
    link: function(scope) {

      scope.selectedNav = undefined;

      scope.$on('$routeChangeSuccess', function() {
        for (var i=0; i<scope.links.length; ++i) {
          if (('#' + $location.url()) === scope.links[i].url) {
            scope.selectedNav = i;
            break;
          }
        }
      })

      scope.swap = function(idx) {
        var tmp = scope.links[idx].text;
        scope.links[idx].text = scope.links[idx].altText;
        scope.links[idx].altText = tmp;
      }

      scope.links = [
        {
          url: '#/',
          primaryIdx: 2,
          words: [
            'about',
            'the',
            'book'
          ]

        },
        {
          url: '#/buy',
          primaryIdx: 2,
          words: [
            'where',
            'to',
            'buy'
          ]
        },
        {
          url: '#/author',
          primaryIdx: 2,
          words: [
            'about', 
            'the', 
            'author'
          ]
        }
      ]
    },
    templateUrl: 'views/templates/navbar.html'
  }
});