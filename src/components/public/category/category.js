var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.category",{
			url: "/category",
			templateUrl: "/templates/components/public/category/category.html",
			controller: "CategoryController",
			resolve: 
			{
				$categories: function(Restangular)
				{
					return Restangular.all('categories').getList(); 
				}
			}
		})
}); 

app.controller("CategoryController", function ($scope, $rootScope,$categories) {
	$scope.addCategory = function()
	{
		var baseCategory = $categories;
		baseCategory.post($scope.category);
	}
	$scope.showCategory = function()
	{
		$scope.category=$categories;
	}
	$scope.editCategory = function()
	{
		console.log("Edit Category called");
	}
});