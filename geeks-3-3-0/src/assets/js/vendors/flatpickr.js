// Flatpickr

if (document.querySelectorAll('.flatpickr').length > 0) {
	var flatpickrElements = document.querySelectorAll('.flatpickr');
	flatpickrElements.forEach(function (element) {
		flatpickr(element, {
			disableMobile: true,
		});
	});
}
