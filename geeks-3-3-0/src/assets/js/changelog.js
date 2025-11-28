// Changelog

// Check if the element with ID 'changelog' exists
const changelogElement = document.getElementById("changelog");

if (changelogElement) {
  // Call the changeLog function
  changeLog();

  function changeLog() {
    // Update the innerHTML of the 'changelog' element
    changelogElement.innerHTML = "v3.3.0";
  }
}
