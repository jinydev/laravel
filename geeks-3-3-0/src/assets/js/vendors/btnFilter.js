// btn filter js

const checkboxes = document.querySelectorAll(".filter-checkbox");
const clearButton = document.getElementById("clearButton");

function updateClearButtonVisibility() {
  const anyChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  clearButton.style.display = anyChecked ? "block" : "none";
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateClearButtonVisibility);
});

clearButton.addEventListener("click", function () {
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  clearButton.style.display = "none";

  // Add logic to reset any other filters if needed
});
