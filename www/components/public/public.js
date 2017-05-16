var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public",{
			abstract: true,
			templateUrl: "public.html",
			controller: "PublicController"
		})
});
app.controller("PublicController", function ($scope,$rootScope,localStorageService,$state) {
$scope.message="public controller";
}); 