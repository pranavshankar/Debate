angular.module('debateApp')
	.controller('IndexCtrl', ['$scope', '$route', '$routeParams', '$location', 'eventHelper',
		function($scope, $route, $routeParams, $location, eventHelper) {
			$scope.$route = $route;
		    $scope.$location = $location;
		    $scope.$routeParams = $routeParams;
		    var events;

		    //GET UPCOMING EVENTS
		    eventHelper.getMostRecentEvents(2).then(function(response) {
		    	$scope.events = response.data;
		    });

		    // GET NEWS (GET 3 MAYBE?) STORIES
		    eventHelper.getMostRecentStories(3).then(function(response) {
		    	$scope.stories = response.data;
		    });
		}]);