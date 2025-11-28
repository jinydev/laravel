// choices.js

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-choices]");
  elements.forEach(function (element) {
    new Choices(element, {
      removeItemButton: element.dataset.choicesRemoveitembutton === "true",
      itemSelectText: "",
      searchEnabled: false,
    });
  });
});
