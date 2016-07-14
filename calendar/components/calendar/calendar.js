function Calendar() {
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

	this.store = store;
	this.config = config;

	this.calendar = this.calendarGenerator();
}

Calendar.prototype.calendarGenerator = function() {
	return {
		fullYear: this.config.fullYear,
		month: this.getMonthZh(),
		days: this.getDays(),
	}
}

Calendar.prototype.getMonthZh = function() {
	var month = this.config.month;
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

Calendar.prototype.getDays = function() {
	var config = this.config;
	var date = new Date();
	if (config) {
		date.setFullYear(config.fullYear);
		date.setMonth(config.month);
	}
	var days = [];
	var monthDays = this.getMonthDays(config.fullYear, config.month);
	for (var i = 0; i < monthDays; i++) {
		date.setDate(i+1);
		var day = {
			day: date.getDay(),
			date: date.getDate(),
			weekEn: this.getWeekEn(date.getDay()),
			weekZh: this.getWeekZh(date.getDay()),
			dateString: this.getDateString(date),
		};
		days.push(day);
	}
	return days;
}

Calendar.prototype.getMonthDays = function(fullYear, month) {
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

Calendar.prototype.getWeekEn = function(week) {
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

Calendar.prototype.getWeekZh = function(week) {
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

Calendar.prototype.prevMonth = function() {
	var config = this.config;
	config.month -= 1;
	if (config.month === -1) {
		config.month = 11;
		config.fullYear -= 1;
	}
	this.store.put(config);
	this.calendar = this.calendarGenerator();
}

Calendar.prototype.nextMonth = function() {
	var config = this.config;
	config.month += 1;
	if (config.month === 12) {
		config.month = 0;
		config.fullYear += 1;
	}
	this.store.put(config);
	this.calendar = this.calendarGenerator();
}

Calendar.prototype.resetMonth = function() {
	var config = this.config;
	var date = new Date();
	config.fullYear = date.getFullYear();
	config.month = date.getMonth();
	this.store.put(config);
	this.calendar = this.calendarGenerator();
}

Calendar.prototype.isWeekend = function(day) {
	if (day === 0 || day === 6) return true;
	return false;
}

Calendar.prototype.isToday = function(dateString) {
	return dateString === this.getDateString(new Date());
}

Calendar.prototype.getDateString = function(date) {
	var month = date.getMonth() + 1;
	month = fillZero(month);
	var day = date.getDate();
	day = fillZero(day);
	function fillZero(num) {
		if (num < 10) return num = '0' + num;
		return num;
	}
	return (date.getFullYear()+''+month+''+day);
}
