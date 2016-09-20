console.log(1);
app.controller('Page1Ctrl', function($scope, $timeout, $location) {
	//===============常量区 开始================
	
	//===============常量区 结束================
	//===============变量区 开始================
	//===============变量区 结束================
	//===============方法区 开始================
	$scope.touchstart = function ($even) {
		console.log($even);
		alert(1).
	}
	$scope.touchmove = function ($even) {
		alert(2).
		console.log($even);
	}
	$scope.touchend = function ($even) {
		console.log($even);
		alert(3).
	}
	//===============方法区 结束================
	//===============启动区 结束================
	//===============启动区 结束================

});