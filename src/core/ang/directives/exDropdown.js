var app = angular.module("App");

app.directive('exDropdown', [function() {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
    		$(function(){
          $(".dropdown-menu li a").click(function(){
          $(".btn:first-child").text($(this).text());
          $(".btn:first-child").val($(this).text());
        });
      });
		}
	};
}]);