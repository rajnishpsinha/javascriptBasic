(function(){
let logincontroller = function($scope,$rootScope, $state){
	$scope.formSubmit = function(){
		console.log('inside formSubmit ')
	if ($scope.username=='admin' && $scope.password=='password')
		{
		$rootScope.userName='admin';
		$state.transitionTo('home');
		}
	else { 
		$scope.error="Incorrect user name or password!"
		}
	}
	
};
angular.module('tApp').controller('logincontroller',logincontroller);
})();