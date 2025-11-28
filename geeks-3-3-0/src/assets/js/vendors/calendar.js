// Calendar js

document.addEventListener('DOMContentLoaded', function () {
	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
		},
		height: 900,
		contentHeight: 800,
		aspectRatio: 3,
		nowIndicator: true,
		now: TODAY + 'T09:25:00',
		initialView: 'dayGridMonth',
		initialDate: TODAY,
		editable: true,
		dayMaxEvents: true,
		navLinks: true,
		events: [
			{
				title: 'All Day Event',
				start: YM + '-01',
				description: 'Toto lorem ipsum dolor sit incid idunt ut',
			},
			{
				title: 'Reporting',
				start: YM + '-14T13:30:00',
				description: 'Lorem ipsum dolor incid idunt ut labore',
				end: YM + '-14',
			},
			// ... (other event objects)
		],
	});
	calendar.render();
});
