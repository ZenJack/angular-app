(function() {
	var app = angular.module('panels', []);

	app.controller('PanelCtrl', function() {
		this.tab = 2;
		this.selectPanel = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(setTab) {
			return this.tab === setTab;
		}
	});


	app.directive('panels', function() {
		return {
			restrict: 'E',
			templateUrl: 'panels.html',
			controller: 'PanelCtrl',
			controllerAs: 'panelCtrl',
		};
	});

})();