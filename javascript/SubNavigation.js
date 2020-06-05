function goToRootDirectory() {
	// change directory
	document.getElementById( "softeng350-path-button" ).style.display = "none";
	document.getElementById( "homepage-dropdown-button" ).style.display = "block";

	// show quick access
	document.getElementById( "quick-access-component" ).style.display = "block";

	// change folder displayed
	document.getElementById( "route-folder-container" ).style.display = "flex";
	document.getElementById( "softeng350-folder-container" ).style.display = "none";

	// hide files
	document.getElementById( "softeng-350-file-container" ).style.display = "none";
}
