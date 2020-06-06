function hoverFileImage( fileButtonId ) {
	const files = document.getElementById( fileButtonId ).getElementsByClassName("file");
	files[0].style.display = "none";
	files[1].style.display = "block";
}

function resetFileImage( fileButtonId ) {
	const files = document.getElementById( fileButtonId ).getElementsByClassName( "file" );
	files[0].style.display = "block";
	files[1].style.display = "none";
}

function rightButtonClicked( dropdownContentId ) {
	// hide all dropdownContent first
	document.getElementsByClassName( "dropdown-content" )[0].style.display = "none";
	document.getElementsByClassName( "dropdown-content" )[1].style.display = "none";

	// display the one near the clicked file
	document.getElementById( dropdownContentId ).style.display = "block"
}

function showVersionPopup(iconId) {
	const tittle = "Previous version for " + iconId;
	document.getElementById("version-title").innerText = tittle;
	document.getElementById( "version-popup" ).style.display = "block";

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if( !event.target.matches('.dropdown-content') ) {
		document.getElementsByClassName( "dropdown-content" )[0].style.display = "none";
		document.getElementsByClassName( "dropdown-content" )[1].style.display = "none";
	}
}
