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
	// close the related graph - ensure a fresh start the next time
	const graph = document.getElementById( "multiple-file" );
	console.log(graph)
	console.log(graph.style.display)
	if( graph.style.display !== "none" ) {
		showOrHideRelatedFiles( "share-all-file-button" );
	}
	console.log(graph.style.display)
	document.getElementById("share-file-popup").style.display = "none";
}

function showPopup() {
	document.getElementById("share-file-popup").style.display = "block";
}

function fileSuccessfullySharedAlert( innerText ) {
	// show the successful-shared-alert popup
	const message = document.getElementById( "alert-message" );
	message.innerText = innerText;

	document.getElementById( "successful-shared-alert" ).style.display = "block";

	// hide the popup after 1 second
	setTimeout(function(){
		document.getElementById( "successful-shared-alert" ).style.display = "none";
	}, 2000);
}


