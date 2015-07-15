angular.module('debateApp')
	.controller('AboutUsCtrl', ['$scope', '$route', '$routeParams', '$location', '$window',
		function($scope, $route, $routeParams, $location, $window) {
			$scope.words = 'hello';
		}]);