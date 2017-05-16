var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.category",{
			url: "/category",
			templateUrl: "/templates/components/public/category/category.html",
			controller: "CategoryController"
		})
}); 

app.controller("CategoryController", function ($scope, $rootScope) {
	$scope.message="Category controller";
});