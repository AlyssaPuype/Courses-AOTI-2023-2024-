function filterGrid() {
  var searchInput = document.getElementById("searchInput");
  var searchTerm = searchInput.value.toLowerCase();

  var gridItems = Array.from(document.getElementsByClassName("courseblock"));

  for (var i = 0; i < gridItems.length; i++) {
    var itemText = gridItems[i].textContent.toLowerCase();
    var linkText = gridItems[i].querySelector("a").textContent.toLowerCase();

    // Show or hide grid items based on whether the search term is found in the item text or link text
    if (itemText.includes(searchTerm) || linkText.includes(searchTerm)) {
      gridItems[i].style.display = "block";
    } else {
      gridItems[i].style.display = "none";
    }
  }
}
