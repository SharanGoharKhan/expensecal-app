var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.signup",{
			url: "/signup",
			templateUrl: "signup.html",
			controller: "SignupController"
		})
});
app.controller("SignupController", function ($scope,$rootScope,localStorageService,$state) {
$scope.message="Signup controller";
} 