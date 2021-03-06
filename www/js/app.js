// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.categories', {
      url: "/categories/:categoryId",
      views: {
        'menuContent': {
          templateUrl: "templates/categories.html",
          controller: 'CategoriesCtrl'
        }
      }
    })

    .state('app.tree', {
      url: "/tree",
      views: {
        'menuContent': {
          templateUrl: "templates/tree.html",
          controller: 'TreeCtrl'
        }
      }
    })

    .state('app.wizard', {
      url: "/wizard/:wizardId",
      views: {
        'menuContent': {
          templateUrl: "templates/wizard.html",
          controller: 'WizardCtrl'
        }
      }
    })

    .state('app.resources', {
      url: "/resources",
      views: {
          'menuContent': {
              templateUrl: "templates/resources.html",
              controller: 'ResourcesCtrl'
          }
      }
    })

    .state('app.search', {
      url: "/search",
      views: {
          'menuContent': {
              templateUrl: "templates/search.html",
              controller: 'SearchCtrl'
          }
      }
    })

    .state('app.resource', {
      url: "/resources/:resourceId",
      views: {
          'menuContent': {
            templateUrl: "templates/resource.html",
            controller: 'ResourceCtrl'
        }
      }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/resources');
  $ionicConfigProvider.tabs.position('bottom'); //other values: top

});
