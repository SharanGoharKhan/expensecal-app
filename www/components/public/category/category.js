var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.category",{
			url: "/category",
			templateUrl: "category.html",
			controller: "CategoryController"
		})
});
app.controller("CategoryController", function ($scope,$rootScope,localStorageService,$state) {
$scope.message="Category controller";
}); 