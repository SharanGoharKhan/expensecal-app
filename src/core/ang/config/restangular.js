var app = angular.module('App');

app.config(function(RestangularProvider){
	RestangularProvider.setRestangularFields({
	  id: "_id"
	});
});

app.run(function($rootScope, $http, Restangular,$location){
	var env = $location.host().split('.').pop();
	var protocol = (env == 'com') ? "https" : "http";
	$rootScope.app = {
  	    "name" : "ExpenseCal",
  	    "apiUrl": protocol +"://api.expensecal." + env,
        "appUrl": protocol +"://app.expesecal." + env,
        "env": env
  	};
    Restangular.setBaseUrl($rootScope.app.apiUrl);
    Restangular.setDefaultHeaders({'Content-Type': 'application/json'});

    $http.defaults.useXDomain = true;
});