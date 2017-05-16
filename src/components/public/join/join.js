var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.join",{
			url: "/join",
			templateUrl: "/templates/components/public/join/join.html",
			controller: "JoinController"
		})
}); 

app.controller("JoinController", function ($scope,$http,localStorageService,$rootScope,Restangular,$state) {
	$scope.register=function()
	{
		$http.post($scope.app.apiUrl+"/auth/register",$scope.user)
			.then(function statusChangeCallback(response){
				$rootScope.$user=response.data;
				localStorageService.set('$user',$rootScope.$user);
			},function errorCallback(response)
			{
				
			});
	}
	$scope.login=function(type)
	{		
		$http.post($scope.app.apiUrl+"/auth/login",$scope.user)
			.then(function statusChangeCallback(response){
				$rootScope.$user=response.data;
				localStorageService.set('$user',$rootScope.$user);
				$state.go('app.public.home');
			},function errorCallback(response)
			{
				
			});
		
	}
});