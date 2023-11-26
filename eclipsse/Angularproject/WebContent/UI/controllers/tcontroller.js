(function(){var tController = function($scope) {
	$scope.customer = [ {
		name : 'Ajay',
		age : 14
	}, {
		name : 'Raju',
		age : 17
	} ];
}
tController.$inject = ['$scope'];
angular.module('tApp').controller('testController', tController);
}())
