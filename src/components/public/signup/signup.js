var app = angular.module('App');

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.signup",{
			url: '/signup',
			templateUrl: "/templates/components/public/signup/signup.html",
			controller: "SignupController"
		})
}); 
app.controller("SignupController", function ($scope,$http,localStorageService,$rootScope,Restangular,$state) {
	$scope.register = function()
	{
		$http.post($scope.app.apiUrl+"/auth/register",$scope.user)
			.then(function successCallback(response){
				$rootScope.$user=response.data;
				localStorageService.set('$user',$rootScope.$user);
			},function errorCallback(response)
			{
				console.log(response);
			});
	}
});