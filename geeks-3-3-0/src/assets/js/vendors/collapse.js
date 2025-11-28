// Collapse

document.addEventListener("DOMContentLoaded", (event) => {
  const collapseElement = document.getElementById("collapseReview");
  const loadMoreButton = document.getElementById("loadMoreButton");

  if (collapseElement && loadMoreButton) {
    collapseElement.addEventListener("shown.bs.collapse", () => {
      loadMoreButton.style.display = "none";
    });
  }
});

// toggle button

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const collapseContent = document.getElementById("collapseContent");

  if (toggleButton && collapseContent) {
    collapseContent.addEventListener("show.bs.collapse", function () {
      toggleButton.innerHTML =
        'Show Less <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>';
      toggleButton.classList.add("show-more");
    });

    collapseContent.addEventListener("hide.bs.collapse", function () {
      toggleButton.innerHTML =
        'Show More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>';
      toggleButton.classList.remove("show-more");
    });
  }
});
