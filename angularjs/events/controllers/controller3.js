(function(){
angular.module('tApp').controller("MyController3", function ($scope, $rootScope) {

    //handle SendDown event
    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Inside SendDown handler of MyController3 : " + data;
    });

    //emit SendUp event up
    $scope.OnClick = function (evt) {
        $scope.$emit("SendUp", "some data");
    }

    //handle SendUp event
    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Inside SendUp handler of MyController3 : " + data;
    });
});
}())