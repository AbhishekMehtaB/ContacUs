angular.module('contactService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Contact', ['$http',function($http) {
		return {
			create : function(contactData) {
				return $http.post('/api/contact', contactData);
			},
		}
	}]);