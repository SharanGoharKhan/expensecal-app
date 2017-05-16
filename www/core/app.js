var app = angular.module('App',['ui.router','restangular']);
app.run(function($rootScope){
	console.log("App is running");
});