var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.expense",{
			url: '/expense',
			templateUrl: "/templates/components/public/expense/expense.html",
			controller: "ExpenseController"
		})
}); 
app.controller("ExpenseController", function ($scope) {
	$scope.message = "Expense Controller";
});