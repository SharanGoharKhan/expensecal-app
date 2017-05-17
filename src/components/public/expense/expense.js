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
				},
				$expenses: function(Restangular)
				{
					return Restangular.all('expense').getList();
				}
			}
		})
}); 
app.controller("ExpenseController", function ($scope,Restangular,$categories,localStorageService,$expenses) {
	var baseExpense = $expenses;
	$scope.expense={};
	$scope.user = localStorageService.get('$user');
	$scope.categories=$categories;
	//TO DO fix hard coded value
	$scope.expense.user_id = $scope.user.id;
	$scope.expense.category_id = 1;
	$scope.addExpense = function()
	{
		baseExpense.post($scope.expense);
		// Restangular.post('expense',$scope.expense);
	}
});