// Retrieve the checkbox element
const checkbox = document.getElementById("myCheckbox");

// Check if there is a saved state in localStorage
const savedState = localStorage.getItem("checkboxState");
if (savedState) {
  checkbox.checked = JSON.parse(savedState);
}

// Add an event listener to save the checkbox state when it changes
checkbox.addEventListener("change", function () {
  localStorage.setItem("checkboxState", JSON.stringify(this.checked));
});
