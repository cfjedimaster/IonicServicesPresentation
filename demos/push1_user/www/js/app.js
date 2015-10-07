// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
		
	Ionic.io();
	
	var user = Ionic.User.current();
	
	if (!user.id) {
		user.id = Ionic.User.anonymousId();
		//no need to save as we save once we push register
	}
	
	var push = new Ionic.Push({
		"onNotification": function(notification) {
			console.log("I got a push!");
			console.dir(notification);
		}
	});
	
	push.register(function(token) {
		console.log("Got Token:",token.token);
		push.addTokenToUser(user);
		console.log("Saving to user...");
		user.save();
	});
			
  });
})
