(function(){
var studentservice = function(){
var studentnames = ['Ajay','Krishan','Pramod','Mukul'];
this.getnames = function(){ return studentnames};
}
angular.module('tApp').service('studentservice',studentservice);
}())