(function(){
angular.module('tApp').controller("MyController2", function ($scope, $rootScope) {
   //handle SendDown event
   $scope.$on("SendDown", function (evt, data) {
   $scope.Message = "Inside SendDown handler of MyController2 : " + data;
 }); 

    //handle SendUp event
    $scope.$on("SendUp", function (evt, data) {
        $scope.Message2 = "Inside SendUp handler of MyController2 : " + data;
    });

});
}())