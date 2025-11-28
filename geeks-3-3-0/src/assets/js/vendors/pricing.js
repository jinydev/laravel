// Pricing js

'use strict';

(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var toggleSwitch = document.querySelector('#pricing-switch input');
		if (toggleSwitch) {
			toggleSwitch.addEventListener('change', function () {
				togglePriceContent();
			});

			function togglePriceContent() {
				var toggleSwitchChecked = toggleSwitch.checked;
				var priceContents = document.querySelectorAll('.toggle-price-content');
				priceContents.forEach(function (content) {
					if (toggleSwitchChecked) {
						content.innerHTML = content.dataset.priceYearly;
					} else {
						content.innerHTML = content.dataset.priceMonthly;
					}
				});
			}
		}
	});

	document.addEventListener('DOMContentLoaded', function () {
		var toggleSwitchSecond = document.querySelector('#pricing-switch-second input');
		if (toggleSwitchSecond) {
			toggleSwitchSecond.addEventListener('change', function () {
				togglePriceContent();
			});

			function togglePriceContent() {
				if (toggleSwitchSecond.checked) {
					// if toggle is yearly
					document.querySelectorAll('.toggle-price-content-second').forEach(function (element) {
						element.innerHTML = element.dataset.priceYearly;
					});
				} else {
					// if toggle is monthly
					document.querySelectorAll('.toggle-price-content-second').forEach(function (element) {
						element.innerHTML = element.dataset.priceMonthly;
					});
				}
			}
		}
	});
})();
