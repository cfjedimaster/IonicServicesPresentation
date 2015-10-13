// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ionic.service.core', 'ionic.service.analytics'])

.controller('Main', function($scope,$ionicAnalytics) {
	
	$scope.destroyWorld = function() {
		console.log('destroy world');
		$ionicAnalytics.track('Destroy World');
	};

	$scope.makeKitten = function() {
		console.log('makeKitten');
		$ionicAnalytics.track('Make Kitten', {
			something:"more kittens"	
		});
	};
	
})
.run(function($ionicPlatform,$ionicAnalytics) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
		
		$ionicAnalytics.register();
		
  });
});
