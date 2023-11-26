
(function(){
var tController= function($scope,firstfactory){
function init(){
    $scope.vehicle=firstfactory.getcar();
    $scope.testname="success";    
    firstfactory.getPost()
.then(function(response) {$scope.postfromfactory = response.data},function(data, status, headers, config) {
        $log.log(data.error + ' ' + status);
    });    
}
init();
$scope.testname1="failure";
};
tController.$inject=['$scope','firstfactory'];
angular.module('tApp').controller('tController',tController);
}());
