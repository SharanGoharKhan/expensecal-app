var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.signin",{
			url: "/signin",
			templateUrl: "signin.html",
			controller: "SigninController"
		})
});
app.controller("SigninController", function ($scope,$rootScope,localStorageService,$state) {
$scope.message="Signin controller";
} 