$(function() {
	//===============页面适配 开始 ===============
	function pageInit() {
		var $page = $('#menu');
		var maxWidth = 450;
		if ($page.width() > maxWidth) {
			$page.removeClass('menu-default');
			$page.addClass('menu-max');
		}
	}
	pageInit();
	//===============页面适配 结束 ===============
});
(function() {

	var app = angular.module('menu', []);
	app.controller('BootCtrl', function($scope, $timeout) {
		//===============常量区 开始================
		var menu = [
		{t1:'盐帮特色', t2:'', name:'自贡鲜锅兔', price:35},
		{t1:'盐帮特色', t2:'', name:'干巴牛柳', price:30},
		{t1:'盐帮小炒', t2:'猪肉类', name:'红烧肥肠', price:30},
		{t1:'盐帮小炒', t2:'猪肉类', name:'火爆肥肠', price:28},
		{t1:'盐帮小炒', t2:'猪肉类', name:'腊香茶树菇', price:28},
		{t1:'盐帮小炒', t2:'猪肉类', name:'水煮肉片', price:25},
		{t1:'盐帮小炒', t2:'猪肉类', name:'京酱肉丝', price:22},
		{t1:'盐帮小炒', t2:'猪肉类', name:'仔姜肉丝', price:22},
		{t1:'盐帮小炒', t2:'猪肉类', name:'韭黄肉丝', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'火爆猪肝', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'回锅肉', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'土豆回锅', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'洋葱肉丝', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'鱼香肉丝', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'青椒肉丝', price:20},
		{t1:'盐帮小炒', t2:'猪肉类', name:'青笋肉丝', price:20},
		{t1:'盐帮小炒', t2:'牛肉类', name:'小炒黄牛肉', price:32},
		{t1:'盐帮小炒', t2:'牛肉类', name:'红烧牛肉', price:30},
		{t1:'盐帮小炒', t2:'牛肉类', name:'水煮牛肉', price:30},
		{t1:'盐帮小炒', t2:'牛肉类', name:'青笋牛肉丝', price:25},
		{t1:'盐帮小炒', t2:'牛肉类', name:'山椒牛肉丝', price:25},
		{t1:'盐帮小炒', t2:'牛肉类', name:'一品牛肉', price:25},
		{t1:'盐帮小炒', t2:'兔肉类', name:'啤酒兔', price:32},
		{t1:'盐帮小炒', t2:'兔肉类', name:'双椒嫩兔', price:28},
		{t1:'盐帮小炒', t2:'兔肉类', name:'鱼香兔丁', price:25},
		{t1:'盐帮小炒', t2:'兔肉类', name:'辣子兔丁', price:25},
		{t1:'盐帮小炒', t2:'鸡肉类', name:'火爆郡肝', price:25},
		{t1:'盐帮小炒', t2:'鸡肉类', name:'泡椒鸡杂', price:25},
		{t1:'盐帮小炒', t2:'鸡肉类', name:'辣子鸡丁', price:22},
		{t1:'盐帮小炒', t2:'鸡肉类', name:'宫爆鸡丁', price:20},
		{t1:'盐帮小炒', t2:'鸭肉类', name:'啤酒鸭', price:32},
		{t1:'盐帮小炒', t2:'鸭肉类', name:'仔姜鸭', price:28},
		{t1:'盐帮小炒', t2:'鸭肉类', name:'姜爆鸭丝', price:20},
		{t1:'盐帮小炒', t2:'其他类', name:'韭黄炒蛋', price:18},
		{t1:'盐帮小炒', t2:'其他类', name:'麻婆豆腐', price:15},
		{t1:'盐帮小炒', t2:'其他类', name:'番茄炒蛋', price:15},
		{t1:'盐帮小炒', t2:'其他类', name:'苦瓜炒蛋', price:15},
		{t1:'盐帮小炒', t2:'其他类', name:'青椒炒蛋', price:15},
		{t1:'盐帮小炒', t2:'其他类', name:'蚂蚁上树', price:15},
		{t1:'盐帮小炒', t2:'时蔬类', name:'炒时蔬', price:12}
		];
		//===============常量区 结束================
		//===============变量区 开始================
		$scope.menuList1 = [];
		$scope.menuList2 = [];
		$scope.countPrice = 0;
		$scope.avgPrice = 0;
		$scope.pepleNumber = 8;
		$scope.createdMenu = false;
		$scope.modelMaxFlag = false;
		$scope.shadow = false;
		$scope.btn = 1;
		$scope.store = new StoreBinder('menu');
		$scope.showTip = false;
		$scope.tips = 'tips';
		//===============变量区 结束================
		//===============方法区 开始================
		function initMenuList1() {
			$scope.menuList1 = menu.map(function(e, i) {
				e.id = i;
				e.img = 'image/cover.jpg';
				return angular.copy(e);
			});

			var list = $scope.store.get();
			if (list) {
				$scope.menuList1 = list;
			}
			calcPrice();
		}

		function getItem(list, id) {
			var m = null;
			list.forEach(function(e) {
				if (e.id === id) {
					m = e;
				};
			})
			return m;
		}

		function calcPrice() {
			$scope.menuList2 = $scope.menuList1.filter(function(e) {
				if (e.selected) {
					return e;
				}
			});

			var countPrice = 0;

			var hasFan = false;
			$scope.menuList2.forEach(function(e, i, a) {
				if (e.name === '米饭') {
					e.price = 2 * $scope.pepleNumber;
					hasFan = true;
				}
				if (e) {
					countPrice += e.price;
				}
			});

			if (!hasFan) {
				var fan = {};
				fan.name = '米饭';
				fan.img = 'image/cover.jpg';
				fan.selected = 'image/selected.jpg';
				fan.price = 2 * $scope.pepleNumber;
				$scope.menuList2.push(fan);
				countPrice += fan.price;
			}

			$scope.countPrice = countPrice;
			$scope.avgPrice = parseFloat(countPrice/$scope.pepleNumber).toFixed(2);
		}

		$scope.selectIn = function(id) {
			var menu = getItem($scope.menuList1, id);

			if (menu.selected) {
				delete menu.selected;
			} else {
				menu.selected = 'image/selected.jpg';
			}
			calcPrice();
		}

		$scope.selectOut = function(id) {
			var menu = getItem($scope.menuList2, id);
			var list = [];
			for (var i = 0; i < $scope.menuList2.length; i++) {
				var m = $scope.menuList2[i];
				if (m.id !== id) {
					list.push(m);
				}
			}
			$scope.menuList2 = list;
			calcPrice();
		}

		$scope.resetMenu = function() {
			$scope.menuList2 = [];
			calcPrice();
		}

		$scope.closeMenu = function() {
			$scope.createdMenu = false;
			$scope.shadow = false;
		}

		$scope.changeSize = function() {
			if ($scope.modelMaxFlag) {
				$scope.modelMaxFlag = false;
			} else {
				$scope.modelMaxFlag = true;
			}
		}

		$scope.calcPrice = function() {
			calcPrice();
		}
		$scope.createMenu = function() {
			$scope.createdMenu = true;
			$scope.shadow = true;
		}

		$scope.changePage = function(page) {
			$scope.btn = page;
		}
		$scope.clearMenu = function() {
			if (!$scope.showTip) {
				openTip('清除完成！', 1.8);
				$scope.store.remove();
				initMenuList1();
			}
		}
		$scope.saveMenu = function() {
			if (!$scope.showTip) {
				openTip('保存完成！', 1.8);
				$scope.store.put($scope.menuList1);
			}
		}

		function openTip(title, s) {
			$scope.showTip = true;
			$scope.tip = title;

			var step = 0.2;
			var interval = setInterval(function() {
				step += 0.008;
				if (step >= 1) {
					clearInterval(interval);
				}
				var rgba = 'rgba(30, 28, 28, '+step+')';
				$('#'+$scope.tips).css({'background':rgba});
			}, 10);

			$timeout(function() {
				$scope.showTip = false;
				$('#'+$scope.tips).css({'background':'rgba(30, 28, 28, 0.2)'});
			}, s*1000);
		}

		//===============方法区 结束================
		//===============启动区 结束================
		initMenuList1();
		//===============启动区 结束================

	});
})();