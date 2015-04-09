angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.iframeHeight = window.innerHeight - 89;
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ResourcesCtrl', function($scope, Resource) {
    $scope.resources = Resource.query();
})

.controller('CategoriesCtrl', function($scope, $stateParams, Resource) {
    if ($stateParams.categoryId == -1){
      $scope.categories = Resource.queryCategories(0);
      
    }else{
      $scope.categories = Resource.getSubCategoriesOf($stateParams.categoryId);
    }
    
})

.controller('TreeCtrl', function($scope, Resource) {
    $scope.categories = Resource.queryAllCategories();
})

.controller('WizardCtrl', function($scope, $stateParams, Resource) {
    if ($stateParams.wizardId == -1){
      $scope.wizard = Resource.queryWizard(0);
      
    }else{
      $scope.wizard = Resource.getSubWizardOf($stateParams.wizardId);
    }
    
})

.controller('ResourceCtrl', function($scope, $stateParams, Resource) {
    $scope.resource = Resource.get({resourceId: $stateParams.resourceId});
})

.controller('SearchCtrl', function($scope,  Resource) {
    $scope.searchText = "";
    $scope.resources = Resource.allResources();
})
