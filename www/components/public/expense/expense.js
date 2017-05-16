var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.expense",{
			url: "/expense",
			templateUrl: "expense.html",
			controller: "ExpenseController"
		})
});
app.controller("ExpenseController", function ($scope,$rootScope,localStorageService,$state) {
$scope.message="Expense controller";
}); 