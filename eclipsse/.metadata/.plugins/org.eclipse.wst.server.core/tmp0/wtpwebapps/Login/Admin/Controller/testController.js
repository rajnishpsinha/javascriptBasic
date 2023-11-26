
(function(){	
angular.module('tApp').controller('testController',  ['$rootScope', '$stateParams', '$state','$scope', '$http', 
	function($rootScope,$stateParams,$state,$scope, $http) {
	$scope.loading = false;
	$scope.getData = function() {
		$scope.loading = true;
		$http.get("http://dummy.restapiexample.com/api/v1/employees")
		.then(function(response){
			$scope.employees = response.data;
			$scope.loading = false;
		});
	}
	$scope.getData();
}]);
})();