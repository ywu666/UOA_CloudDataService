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