angular.module('contactController', [])

	// inject the Contact service factory into our controller
	.controller('mainController', ['$scope','$http','Contact', function($scope, $http, Contact) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.saved = false;
		$scope.notSaved = false;
		// when submitting the add form, send the text to the node API
		$scope.createContact = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.name && $scope.formData.email) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Contact.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.saved = true;

					})
					.error(function(data){
						$scope.notSaved = true;
					});
			}
		};

	}]);