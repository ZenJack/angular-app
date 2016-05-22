(function() {
	/*
	 * 定義一個模塊
	 * 
	 * fn module
	 * 參數-1：應用名稱
	 * 參數-2：可能依賴的其它庫（多個）
	 */
	var app = angular.module('zen', []);

	var masters = [
	{
		name: '釋伽牟尼',
		address: '古印度',
		representative: '金剛經',
		show: true,
		image: 'lib/image/sjmn.jpg',
	},
	{
		name: '孔夫子',
		address: '先秦魯國',
		representative: '論語',
		show: true,
		image: 'lib/image/kz.jpg',
	},
	{
		name: '老子',
		address: '先秦楚國',
		representative: '道德經',
		show: false,
		image: 'lib/image/lz.jpg',
	},
	];

	app.controller('zenCtrl', function() {
		this.persons = masters;
	});
})();