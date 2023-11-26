(function(){
let fmodule= angular.module('tApp',['ui.router','smart-table']);
fmodule.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('logout',{
		    url:'/logout',	
			templateUrl:'Admin/Views/logout.html',
			controller:'logoutcontroller',

	})
	
	 .state('login',{
		 url:'/login',
		 templateUrl:'Admin/Views/login.html',
		 controller:'logincontroller'

	 })
	 .state('home',{
		 url:'/home',
		 templateUrl:'Admin/Views/home.html',
		 controller:'homecontroller'

	 })
	 .state('smartTable',{
		 url:'/table',
		 templateUrl:'Admin/Views/smartTableTest.html',
		 controller:'testController'

	 })
	 $urlRouterProvider.otherwise('/home');
}]);



})();