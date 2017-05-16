var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.home",{
			url: "/home",
			templateUrl: "home.html",
			controller: "HomeController"
		})
});
app.controller("HomeController", function ($scope,$rootScope,localStorageService,$state) {
$scope.message="home controller";
} 