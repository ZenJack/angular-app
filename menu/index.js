var app = angular.module('index', ['ngRoute','ngTouch']);

app.controller('BootCtrl', function($scope, $timeout, $location) {
	//===============常量区 开始================
	
	//===============常量区 结束================
	//===============变量区 开始================
	//===============变量区 结束================
	//===============方法区 开始================
	$scope.page = function(page) {
		$location.path('/'+page);
	}
	//===============方法区 结束================
	//===============启动区 结束================
	//===============启动区 结束================

});

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('html');
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider	
	.when('/1', {
		controller: 'Page1Ctrl',
		templateUrl: 'views/page1.html'
	})
	.when('/2', {
		controller: 'Page2Ctrl',
		templateUrl: 'views/page2.html'
	})
	.otherwise({redirectTo: '/1'});
}]);