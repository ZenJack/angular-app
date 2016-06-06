(function() {
	var app = angular.module('nav', []);
	var store = new Store();
	var key = 'page';

	init();
	function init() {
		var page = location.href;
		page = page.slice(page.lastIndexOf('/')+1);
		store.put(key, page);
	}


	app.controller('NavCtrl', function() {
		this.selectPage = function(page) {
			store.put(key, page);
			location.href = page;
		}
		this.isSelected = function(page) {
			return page === store.get(key);
		}
	});

	app.directive('navs', function() {
		return {
			restrict: 'E',
			templateUrl: 'nav.html',
			controller: 'NavCtrl',
			controllerAs: 'navCtrl',
		}
	});
})();