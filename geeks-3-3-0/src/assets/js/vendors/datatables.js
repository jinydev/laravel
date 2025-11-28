// For dataTableBasic
var dataTableBasic = document.querySelector('#dataTableBasic');

if (dataTableBasic) {
	document.addEventListener('DOMContentLoaded', function () {
		var basicTable = new DataTable(dataTableBasic, {
			responsive: true,
			pagingType: 'numbers',
		});
	});
}

// For dataTableButtons
var dataTableButtons = document.querySelector('#dataTableButtons');

if (dataTableButtons) {
	document.addEventListener('DOMContentLoaded', function () {
		var buttonsTable = new DataTable(dataTableButtons, {
			responsive: true,
			dom:
				"<'row align-items-center'<'col-xl-6 col-12 ps-lg-6 px-4 py-2'B><'col-xl-4 col-12 d-xl-flex justify-content-end'f><'col-xl-2 d-xl-flex justify-content-end'l><'col-sm-12'tr<br/>>>" +
				"<'row align-items-center border-top mx-0'<'col-sm-6'i><'col-sm-6'p>>",
			buttons: [
				{
					text: 'colvis',
					className: 'btn btn-light mb-1',
					action: function (e, dt, node, config) {
						node.classList.remove('btn-secondary');
						dt.button(node).trigger();
					},
				},
				{
					text: 'copyHtml5',
					className: 'btn btn-light mb-1',
					action: function (e, dt, node, config) {
						node.classList.remove('btn-secondary');
						dt.button(node).trigger();
					},
				},
				{
					text: 'csvHtml5',
					className: 'btn btn-light mb-1',
					action: function (e, dt, node, config) {
						node.classList.remove('btn-secondary');
						dt.button(node).trigger();
					},
				},
				{
					text: 'pdfHtml5',
					className: 'btn btn-light mb-1',
					action: function (e, dt, node, config) {
						node.classList.remove('btn-secondary');
						dt.button(node).trigger();
					},
				},
				{
					text: 'print',
					className: 'btn btn-light mb-1',
					action: function (e, dt, node, config) {
						node.classList.remove('btn-secondary');
						dt.button(node).trigger();
					},
				},
			],
			pagingType: 'numbers',
		});
	});
}
