(function(){
var brands = function($http){
var cars=['maruti','fiat','santro'];
var factory={};
factory.getcar=function(){
return cars;
};
factory.getPost=function(){
return $http.get('https://jsonplaceholder.typicode.com/posts/1');
};
return factory;
};
brands.$inject=['$http'];
angular.module('tApp').factory('firstfactory',brands);
}());