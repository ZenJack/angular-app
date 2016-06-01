(function() {
	/*
	 * 定義一個模塊
	 * 
	 * fn module
	 * 參數-1：應用名稱
	 * 參數-2：可能依賴的其它庫（多個）
	 */
	var app = angular.module('bookcase', []);

	var books = [
	{
		name: '金剛經',
		author: '釋伽牟尼',
		intro: '引領人進入真如世界，得大自在，無有煩惱之第一經典。為最上乘上人說，為大根大智人說。',
		reviewFlag: true,
		price: 10,
		registerDate: new Date('2015-02-25'),
		cover: 'lib/image/sjmn.jpg',
		kind: '思想',
	},
	{
		name: '道德經',
		author: '老子',
		intro: '揭示天地運行之基本法則，闡述了人何以與自然相處，何以做到無為而無不為。	',
		reviewFlag: true,
		price: 11,
		registerDate: new Date('2014-12-21'),
		cover: 'lib/image/lz.jpg',
		kind: '思想',
	},
	{
		name: '論語',
		author: '孔子',
		intro: '全面論述了人與人之間的相處倫理。',
		reviewFlag: false,
		price: 9,
		registerDate: new Date('2016-05-01'),
		cover: 'lib/image/kz.jpg',
		kind: '思想',
	},
	
	];

	var tabFlag = 1;
	
	app.controller('BookListCtrl', function() {
		this.books = books;
		this.tabFlag = tabFlag;
	});
})();