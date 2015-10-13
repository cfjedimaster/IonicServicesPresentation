// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller("Main", function($scope) {
	
	$scope.doUpdate = function() {
		
		//automatically deploy
		var deploy = new Ionic.Deploy();
		
		// Check Ionic Deploy for new code
		deploy.check().then(function(hasUpdate) {     
			console.log('Ionic Deploy: Update available: ' + hasUpdate);
			if(hasUpdate) {
				console.log('Ok, lets do an update.');
				deploy.update().then(function(res) {
					console.log('Ionic Deploy: Update Success! ', res);
				}, function(err) {
					console.log('Ionic Deploy: Update error! ', err);
				}, function(prog) {
					console.log('Ionic Deploy: Progress... ', prog);
				});
								
			}
		}, function(err) {
			console.error('Ionic Deploy: Unable to check for updates', err);
		});
	};
		
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

	//I will NOT be required soon!
	Ionic.io();
		
	/* this whole block is broken due to a bug - will be fixed soon...
	
	//I will NOT be required soon!
	Ionic.io();
	
	//automatically deploy
	var deploy = new Ionic.Deploy();
	
	// Check Ionic Deploy for new code
	deploy.check().then(function(hasUpdate) {     
		console.log('Ionic Deploy: Update available: ' + hasUpdate);
	}, function(err) {
		console.error('Ionic Deploy: Unable to check for updates', err);
	});
	
	*/
		
  });
});

