(function() {
	var app = angular.module('calendar', []);

	function CalendarCtrl() {
		this.calendar = new Calendar();
	}

	app.component('calendar', {
		templateUrl: 'components/calendar/calendar.html',
		controller: CalendarCtrl,
	});
})();