angular.module('ngcookbookApp')
.directive('navbar', function ($location, $timeout) {
  return {
    restrict: 'E',
    link: function(scope) {

      scope.selectedNav = undefined;

      scope.$on('$routeChangeSuccess', function() {
        for (var i=0; i<scope.links.length-1; ++i) {
          if (('#' + $location.url()) === scope.links[i].url) {
            scope.selectedNav = i;
          }
        }
      })

      scope.links = [
        {
          url: '#/',
          text: 'About the Book'
        },
        {
          url: '#/buy',
          text: 'Where to Buy'
        },
        {
          url: '#/about',
          text: 'About the Author'
        },
        {
          url: '#/more',
          text: 'More by Matt Frisbie'
        },
        null
      ]
    },
    templateUrl: 'views/templates/navbar.html'
  }
});