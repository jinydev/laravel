// Increment value js
(function () {
	'user strict';

	// Function to increment the value
	function incrementValue(e) {
		e.preventDefault();
		var target = e.target;
		var fieldName = target.getAttribute('data-field');
		var parent = target.closest('.input-group');
		var input = parent.querySelector('input[name="' + fieldName + '"]');
		var currentVal = parseInt(input.value, 10);

		if (!isNaN(currentVal)) {
			input.value = currentVal + 1;
		} else {
			input.value = 0;
		}
	}

	// Function to decrement the value
	function decrementValue(e) {
		e.preventDefault();
		var target = e.target;
		var fieldName = target.getAttribute('data-field');
		var parent = target.closest('.input-group');
		var input = parent.querySelector('input[name="' + fieldName + '"]');
		var currentVal = parseInt(input.value, 10);

		if (!isNaN(currentVal) && currentVal > 0) {
			input.value = currentVal - 1;
		} else {
			input.value = 0;
		}
	}

	// Attach event listeners to buttons
	var inputGroups = document.querySelectorAll('.input-group');

	inputGroups.forEach(function (inputGroup) {
		var buttonPlus = inputGroup.querySelector('.button-plus');
		var buttonMinus = inputGroup.querySelector('.button-minus');

		buttonPlus.addEventListener('click', function (e) {
			incrementValue(e);
		});

		buttonMinus.addEventListener('click', function (e) {
			decrementValue(e);
		});
	});
})();
