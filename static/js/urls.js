angular.module('debateApp')
	.factory('urls', 
		function() {
			
			var RECENT_EVENT_BASE = '/recent_events/?num=';
			var RECENT_STORIES_BASE = '/recent_stories/?num=';

			var _recent_events = function(num) {
				return RECENT_EVENT_BASE + num;
			};

			var _recent_stories = function(num) {
				return RECENT_STORIES_BASE + num;
			}
			// API
			return {
				recent_events: _recent_events,
				recent_stories: _recent_stories
			};
	});