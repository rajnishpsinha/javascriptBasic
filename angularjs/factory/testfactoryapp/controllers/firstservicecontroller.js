(function(){

var servicecontroller = function($scope,studentservice,$http,$log){
function init(){
$scope.names= studentservice.getnames();

$http.get('https://jsonplaceholder.typicode.com/posts/1')
.then(function(response) {$scope.post = response.data},function(data, status, headers, config) {
        $log.log(data.error + ' ' + status);
    });

}
init();

servicecontroller.$inject=['$scope','studentservice','$http'];


}
angular.module('tApp')
 .controller('sevicecontroller',servicecontroller);
}())
