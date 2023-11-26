(function(){
let vegetables=[
    {
    name:"Patato",
    rate:30
    },
    {
        name:"French Beans",
        rate:60
    },
    {
        name:"Tomato",
        rate:15
    },
    {
        name:"Onion",
        rate:30
    }
]
let market ={city:"Hyderabad",place:"Nallagandla"};
let vegcontroller= function($scope){
$scope.vegetableList= vegetables;
$scope.marketplace =market;
}
vegcontroller.$inject=['$scope'];
angular.module('tApp').controller('vegcontroller',vegcontroller);
}())