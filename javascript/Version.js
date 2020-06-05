function changeVersionDisplayed( buttonId, visibleGraphId ) {
	const graphs = document.getElementsByClassName( "version-graphs" );
	const buttons = document.getElementsByClassName( "version-buttons" );

	console.log(graphs)
	console.log(buttons)
	for( let i = 0; i < graphs.length; i++ ) {
		// hide all the graph
		graphs[i].style.display = "none";
		console.log("graph " + graphs[i].style.display)
		// change background color of all button to lightgray
		buttons[i].style.backgroundColor = "lightgray";
		console.log("button " + buttons[i].style.backgroundColor)

	}

	document.getElementById( visibleGraphId ).style.display = "table-cell";
	document.getElementById( buttonId ).style.backgroundColor = "white";
}

function hideVersion() {
	document.getElementById( "verion-popup" ).style.display = "none";
}