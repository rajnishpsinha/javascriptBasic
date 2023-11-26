(function(){
    var cars=[{brand:'Maruti', price:'4 Lack'},{brand:'Hyndai', price:'5 Lakh'},{brand:'Tata', price:'2 Lakh'}];
    var myctrl = function($scope)
    {
    $scope.vehicles=cars;
    
    }
    myctrl.$inject=['$scope'];
    angular.module('testingApp').controller('myctrl',myctrl);
    }());