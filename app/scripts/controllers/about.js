'use strict';

/**
 * @ngdoc function
 * @name ngcookbookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngcookbookApp
 */
angular.module('ngcookbookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
