var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.signin",{
			url: "/signin",
			templateUrl: "/templates/components/public/signin/signin.html",
			controller: "SigninController"
		})
}); 

app.controller("SigninController", function ($scope,$http,localStorageService,$rootScope,Restangular,$state) {
	$scope.message= "signin controller";
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