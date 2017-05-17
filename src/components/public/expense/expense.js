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
app.controller("ExpenseController", function ($scope,Restangular,$categories,localStorageService,$expenses,$http) {
	var baseExpense = $expenses;
	$scope.expense={};
	$scope.user = localStorageService.get('$user');
	$scope.categories=$categories;
	//TODO fix hard coded value
	$scope.expense.user_id = $scope.user.id;
	$scope.expense.category_id = 1;
	$scope.addExpense = function()
	{
		baseExpense.post($scope.expense);
	}
	$scope.showExpense = function()
	{
		$scope.allExpenses=[];
		$http.get($scope.app.apiUrl+"/expenseById"+"/"+$scope.user.id)
			.then(function statusChangeCallback(response){
				$scope.allExpenses=response;
			},function errorCallback(response)
			{
				console.log("error");
			});
		//$scope.allExpenses = Restangular.all('expenseById',2).getList();
		console.log($scope.allExpenses);
	}
});