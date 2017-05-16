var app = angular.module('App',['ui.router','restangular','ngCookies','ngSanitize','angular-momentjs', 'ngFileUpload','LocalStorageModule','oc.lazyLoad']);



app.run(function($rootScope, $location, $state,$moment,localStorageService){
	var env = $location.host().split('.').pop();
	var protocol = "http";
	$rootScope.app = {
		"name" : "ApnaImages",
		"apiUrl" : protocol + "://api.apnaimages." + env,
		"appUrl" : protocol + "://app.myndplan." + env,
		"env" : env
	};
	$rootScope.user=localStorageService.get("$user");
});
