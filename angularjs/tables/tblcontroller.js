(function(){
var tblController= function($scope,$http){
$scope.tableName = "Residents List";
$scope.loading=false;
$scope.employees=[];
$scope.getData=function(){
    $scope.loading=true;
    $http.get('http://dummy.restapiexample.com/api/v1/employees')
     .then(function(response){
         console.log('response',response);
         $scope.employees =response.data.data;
         console.log('employees',$scope.employees);
         $scope.loading=false;
     },
     function(errResponse){ console.log("error has occured");}
        );
}
$scope.getData();
}
tblController.$inject=['$scope','$http'];
angular.module('tblApp',['smart-table']).controller('tblController',tblController);
})()