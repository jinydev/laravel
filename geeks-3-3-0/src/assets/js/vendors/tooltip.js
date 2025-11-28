// Tooltip
(function () {
  // img tooltip

  tippy(".imgtooltip", {
    content(reference) {
      const id = reference.getAttribute("data-template");
      const template = document.getElementById(id);

      // Check if the template element exists before accessing its innerHTML
      if (template) {
        return template.innerHTML;
      } else {
        return "Template not found"; // You can provide a fallback content here
      }
    },
    allowHTML: true,
    theme: "light",
    animation: "scale",
  });

  // bookmark

  tippy(".bookmark", {
    content: "Add to Bookmarks",
    theme: "light",
    animation: "scale",
  });

  // remove bookmark

  tippy(".removeBookmark", {
    content: "Remove Bookmarks",
    animation: "scale",
  });

  // img tooltip

  tippy(".texttooltip", {
    content(reference) {
      const id = reference.getAttribute("data-template");
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
    theme: "light",
    animation: "scale",
  });

  // dropdown tooltip

  tippy(".dropdownTooltip", {
    content(reference) {
      const id = reference.getAttribute("data-template");
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
    animation: "scale",
    placement: "right",
    theme: "lightPurple",
  });
})();
