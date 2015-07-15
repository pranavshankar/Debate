angular.module('debateApp')
	.factory('eventHelper', ['$http', 'urls',
		function($http, urls) {
			
			var _getMostRecentEvents = function(num) {
				var promise = $http.get(urls.recent_events(num));
				return promise;
			};

			var _getMostRecentStories = function(num) {
				var promise = $http.get(urls.recent_stories(num));
				return promise;
			}
			// API
			return {
				getMostRecentEvents: _getMostRecentEvents,
				getMostRecentStories: _getMostRecentStories
			};
	}]);