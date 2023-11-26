
(function(){
let homecontroller=function($scope, $rootScope, $stateParams, $state) {
    $scope.user = $rootScope.userName;
 }
angular.module('tApp').controller('homecontroller',homecontroller);
})();
