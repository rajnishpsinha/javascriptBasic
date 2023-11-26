(function(){
var customdirective = function()
{    return{ template: '<div>City Name:{{marketplace.city}}</div>' };
};
angular.module('tApp')
    .directive('firstDirective',customdirective);
}())