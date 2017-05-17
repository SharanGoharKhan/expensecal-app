var app = angular.module("App");

app.directive('exDropdown', [function() {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
      var result;
    		$(function(){
          $(".dropdown-menu li a").click(function(){
          $(".btn:first-child").text($(this).text());
          result = $(".btn:first-child").val($(this).text());
        });
        // var cat=element[0].querySelector('a');
      });
		}
	};
}]);