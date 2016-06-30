(function() {
	var app = angular.module('calendar', []);

	function CalendarCtrl() {
		var store = new StoreBinder('config');
		var config = store.get();
		if (!config) {
			var date = new Date();			
			config = {
				fullYear: date.getFullYear(),
				month: date.getMonth(),
			};
			store.put(config);
		}

		var calendar = {
			fullYear: config.fullYear,
			month: getMonthZh(config.month),
			days: getDays(config),
		};

		this.calendar = calendar;

		this.prevMonth = function() {
			config.month -= 1;
			if (config.month === -1) {
				config.month = 11;
				config.fullYear -= 1;
			}

			store.put(config);

			this.calendar = getCalendar(calendar, config);	
		}

		this.nextMonth = function() {
			config.month += 1;
			if (config.month === 12) {
				config.month = 0;
				config.fullYear += 1;
			}

			store.put(config);

			this.calendar = getCalendar(calendar, config);	
		}

		this.resetMonth = function() {
			var date = new Date();
			config.fullYear = date.getFullYear();
			config.month = date.getMonth();
			this.calendar = {
				fullYear: config.fullYear,
				month: getMonthZh(config.month),
				days: getDays(config),
			}
			store.put(config);
		}

		this.isWeekend = function(day) {
			if (day === 0 || day === 6) return true;
			return false;
		}

		this.isToday = function(dateString) {
			var date = new Date();
			return dateString === (date.getFullYear()+''+date.getMonth()+''+date.getDate());
		}
	}

	function getCalendar(calendar, config) {
		calendar.fullYear = config.fullYear;
		calendar.month = getMonthZh(config.month);
		calendar.days = getDays(config);
		return calendar;
	}

	function getDays(config) {
		var date = new Date();
		if (config) {
			date.setFullYear(config.fullYear);
			date.setMonth(config.month);
		}
		var days = [];
		var monthDays = getMonthDays(config.fullYear, config.month);
		for (var i = 0; i < monthDays; i++) {
			date.setDate(i+1);
			var day = {
				day: date.getDay(),
				date: date.getDate(),
				weekEn: getWeekEn(date.getDay()),
				weekZh: getWeekZh(date.getDay()),
				dateString: date.getFullYear()+''+date.getMonth()+''+date.getDate(),
			};
			days.push(day);
		}
		return days;
	}

	function getMonthDays(fullYear, month) {
		switch (month) {
			case 0: return 31;
			case 1:
				if (fullYear % 4 == 0 && fullYear % 100 != 0) {
					return 29;
				} 
				return 28;
			case 2: return 31;
			case 3: return 30;
			case 4: return 31;
			case 5: return 30;
			case 6: return 31;
			case 7: return 31;
			case 8: return 30;
			case 9: return 31;
			case 10: return 30;
			case 11: return 31;
		}
	}

	function getWeekEn(week) {
		switch(week) {
			case 0: return 'S';
			case 1: return 'M';
			case 2: return 'T';
			case 3: return 'W';
			case 4: return 'T';
			case 5: return 'F';
			case 6: return 'S';
		}
	}

	function getWeekZh(week) {
		switch(week) {
			case 0: return '日';
			case 1: return '一';
			case 2: return '二';
			case 3: return '三';
			case 4: return '四';
			case 5: return '五';
			case 6: return '六';
		}
	}

	function getMonthZh(month) {
		switch (month) {
			case 0: return '一';
			case 1: return '二';
			case 2: return '三';
			case 3: return '四';
			case 4: return '五';
			case 5: return '六';
			case 6: return '七';
			case 7: return '八';
			case 8: return '九';
			case 9: return '十';
			case 10: return '十一';
			case 11: return '十二';
		}
	}

	app.component('calendar', {
		templateUrl: 'components/calendar/calendar.html',
		controller: CalendarCtrl,
	});
})();