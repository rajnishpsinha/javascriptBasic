(function(){
var cars=[{brand:'Maruti', price:'4 Lack'},{brand:'Hyndai', price:'5 Lakh'},{brand:'Tata', price:'2 Lakh'}];
var ctrl = function($scope)
{
$scope.vehicles=cars;

}
ctrl.$inject=['$scope'];
angular.module('testingApp').controller('ctrl',ctrl);
}());