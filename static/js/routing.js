angular.module('debateApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
				    templateUrl: 'templates/index.html',
				    controller: 'IndexCtrl',
			  })
			  .when('/AboutUs', {
			    templateUrl: 'templates/aboutUs.html',
			    controller: 'AboutUsCtrl'
			  })
			  .when('/Events', {
			    templateUrl: 'templates/events.html',
			    controller: 'EventsCtrl'
			  })
			  .when('/Team', {
			    templateUrl: 'templates/team.html',
			    controller: 'TeamCtrl'
			  })	
			  .when('/Resources', {
			    templateUrl: 'templates/resources.html',
			    controller: 'ResourcesCtrl'
			  })
			  .when('/Join', {
			  	templateUrl: 'templates/join.html',
			  	controller: 'JoinCtrl'
			  })
			  .when('/Contact', {
			  	templateUrl: 'templates/contact.html',
			  	controller: 'ContactCtrl'
			  })
			  .otherwise({
			  	redirectTo: "/"
			  });	
		}]);
