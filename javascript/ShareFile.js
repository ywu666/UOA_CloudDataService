function showOrHideRelatedFiles( buttonId ) {
	const graph = document.getElementById( "multiple-file" );
	const button = document.getElementById( buttonId );

	if( graph.style.display === "none" ) {
		graph.style.display = "block";
		button.innerText = "Share one file only";

	} else {
		graph.style.display = "none";
		button.innerText = "Share all files containing the same tag";
	}
}

function hidePopup() {
	document.getElementById("share-file-popup").style.display = "none";
	console.log("blurrred")
}