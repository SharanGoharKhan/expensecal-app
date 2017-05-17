var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.expense",{
			url: '/expense',
			templateUrl: "/templates/components/public/expense/expense.html",
			controller: "ExpenseController",
			resolve:
			{
				$categories: function(Restangular)
				{
					return Restangular.all('categories').getList(); 
				}
			}
		})
}); 
app.controller("ExpenseController", function ($scope,Restangular,$categories) {
	$scope.categories=$categories;
	$(function(){

	    $(".dropdown-menu li a").click(function(){

	      $(".btn:first-child").text($(this).text());
	      $(".btn:first-child").val($(this).text());

	   });
	});
});