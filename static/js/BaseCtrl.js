angular.module('debateApp')
	.controller('BaseCtrl', ['$scope', '$route', '$routeParams', '$location', '$window',
		function($scope, $route, $routeParams, $location, $window) {
			$scope.$route = $route;
		    $scope.$location = $location;
		    $scope.$routeParams = $routeParams;

		    $scope.routerClick = function(part) {
		    	$window.location.href = '/#/' + part;
		    };

		}]);