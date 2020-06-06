function changeVersionDisplayed( buttonId, visibleGraphId ) {
	const graphs = document.getElementsByClassName( "version-graphs" );
	const buttons = document.getElementsByClassName( "version-buttons" );

	console.log(graphs)
	console.log(buttons)
	for( let i = 0; i < graphs.length; i++ ) {
		// hide all the graph
		graphs[i].style.display = "none";
		console.log("graph " + graphs[i].style.display)
		// change background color of all button to lightblue
		buttons[i].style.backgroundColor = "#b3d9ff";
		console.log("button " + buttons[i].style.backgroundColor)

	}

	document.getElementById( visibleGraphId ).style.display = "table-cell";
	document.getElementById( buttonId ).style.backgroundColor = "white";
}

function hideVersion() {
	document.getElementById( "version-popup" ).style.display = "none";
}

function changeFileVersion() {
	hideVersion();

	// show a file successfully replaced alert
	fileSuccessfullySharedAlert( "File version successfully updated!" );
}