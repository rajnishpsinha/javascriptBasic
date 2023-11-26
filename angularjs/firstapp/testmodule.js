
(function(){
var app = angular.module('testingApp',['ngRoute']);
app.config(function($routeProvider){
 $routeProvider.when('/customers',
 {
controller:'ctrl',
templateUrl: 'firstapp/views/customers.html'

 } )
 .when('/order',
 {
controller:'myctrl',
templateUrl:'firstapp/views/orders.html'
 })
 .otherwise( { redirectTo: '/' } );
});
}());



