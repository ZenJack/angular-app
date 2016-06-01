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
	
	app.controller('BookListCtrl', function() {
		this.books = books;
	});
	
	app.controller('PanelCtrl', function() {
		this.tab = 2;
		this.selectPanel = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(setTab) {
			return this.tab === setTab;
		}
	});
	
	app.controller('ReviewCtrl', function() {
		// 初始化書籍列表
		var node;
		books.forEach(function(e) {
			node = document.createElement('option');
			node.setAttribute('value', e.name);
			document.getElementById('bookList').appendChild(node);
		});
		

		this.getBookByName = function(name) {
			var book;
			books.forEach(function(e) {
				if (e.name === name) {
					book = e;
					return;
				}
			});
			return book;
		}
		
		this.book = this.getBookByName('金剛經');
		
		this.submitReview = function(book) {
			console.log(JSON.stringify(book));
		}

		this.changeBook = function(name) {
			this.book = this.getBookByName(name);
			console.log(this.book);
		}
	});
})();