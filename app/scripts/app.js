'use strict';

/**
 * @ngdoc overview
 * @name ngcookbookApp
 * @description
 * # ngcookbookApp
 *
 * Main module of the application.
 */
angular
  .module('ngcookbookApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {

    var resolveAnimation = {
      animationToggle: function($rootScope, $q, $timeout) {

        var deferred = $q.defer();
        
        $timeout(function() {
          deferred.resolve();
        }, 800)

        return deferred.promise;
      }
    }

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: resolveAnimation
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: resolveAnimation
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $timeout) {
    $rootScope.logo = {
      visible: true
    };

    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.logo.visible = true;
    })


    $rootScope.$on('$routeChangeSuccess', function() {
      $rootScope.logo.visible = false;
    })
  });