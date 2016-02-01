angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('menu.welcome', {
      url: '/welcome',
      views: {
        'side-menu21': {
          templateUrl: 'templates/welcome.html',
          controller: 'welcomeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.login', {
      url: '/login',
      views: {
        'side-menu21': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('menu.blank!', {
      url: '/blank',
      views: {
        'side-menu21': {
          templateUrl: 'templates/blank!.html',
          controller: 'blank!Ctrl'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('tabsController.cameraTabDefaultPage', {
      url: '/page14',
      views: {
        'tab4': {
          templateUrl: 'templates/cameraTabDefaultPage.html',
          controller: 'cameraTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cartTabDefaultPage', {
      url: '/page15',
      views: {
        'tab5': {
          templateUrl: 'templates/cartTabDefaultPage.html',
          controller: 'cartTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cloudTabDefaultPage', {
      url: '/page16',
      views: {
        'tab6': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('menu.components', {
      url: '/components',
      views: {
        'side-menu21': {
          templateUrl: 'templates/components.html',
          controller: 'componentsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.todos', {
      url: '/todos',
      views: {
        'side-menu21': {
          templateUrl: 'templates/todos.html',
          controller: 'todosCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu/welcome');

});