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

    var animationResolve = {
      animationToggle: [
        '$q', 
        '$timeout', 
        function($q, $timeout) {
          var deferred = $q.defer();
          
          $timeout(function() {
            deferred.resolve();
          }, 800)

          return deferred.promise;
        }
      ]
    }

    $routeProvider
      // .when('', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   resolve: animationResolve
      // })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: animationResolve
      })
      .when('/author', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: animationResolve
      })
      .when('/buy', {
        templateUrl: 'views/buy.html',
        controller: 'AboutCtrl',
        resolve: animationResolve
      })
      // .when('/more', {
      //   templateUrl: 'views/more.html',
      //   controller: 'AboutCtrl',
      //   resolve: animationResolve
      // })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $timeout, $location) {
    $rootScope.logo = {
      visible: true
    };

    $rootScope.showPage = true;
    $rootScope.firstTime = true;
    $rootScope.animationLock = false;

    function showLogo() {
      if (!$rootScope.animationLock && !$rootScope.logo.visible) {
        $rootScope.animationLock = true;
        $rootScope.logo.visible = true;
        $timeout(function() {
          $rootScope.animationLock = false;
        }, 500)
      }
    }

    function hideLogo() {
      if (!$rootScope.animationLock && $rootScope.logo.visible) {
        $rootScope.animationLock = true;
        $rootScope.logo.visible = false;
        $timeout(function() {
          $rootScope.animationLock = false;
        }, 500)
      }
    }

    $rootScope.$on('$routeChangeStart', function(data, payload) {
      // console.log('jake', $location.url(), data, payload)
      if (!payload.redirectTo) {
        if ($rootScope.firstTime) {
          $rootScope.firstTime = false;
          $timeout(function() {
            $rootScope.showPage = false;
            showLogo(); 
          }, 500)
          
        } else {
          showLogo();
        }
      }
    })

    $rootScope.$on('$routeChangeSuccess', function(data, payload) {
      if (!payload.redirectTo) {
        hideLogo();
      }
    })
  });