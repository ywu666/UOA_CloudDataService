function hideFileRelationGraph() {
	document.getElementById( "file-relation-popup" ).style.display = "none";
}

function showDraftGraphOnly() {
	document.getElementById( "back-icon" ).style.display = "inline";
	document.getElementById( "slide-related-graph-container" ).style.display = "none";

	// place the graph in the middle
	document.getElementById( "draft-related-graph-container" ).classList.remove( "w3-cell" );
	const button  = document.getElementsByClassName( "graph-container" )[0];
	button.style.marginLeft = "20%";
	button.style.marginRight = "20%";

	// enable the share button
	document.getElementById( "share-related-graph-button" ).disabled = false;
	console.log(document.getElementById("share-related-graph-button"))
	console.log(document.getElementById( "share-related-graph-button" ).disabled)
}

function showAllGraphs() {
	document.getElementById( "back-icon" ).style.display = "none";
	document.getElementById( "slide-related-graph-container" ).style.display = "table-cell";

	document.getElementById( "draft-related-graph-container" ).classList.add( "w3-cell" );
	const button  = document.getElementsByClassName( "graph-container" )[0];
	button.style.marginLeft = "0";
	button.style.marginRight = "0";

	// disable the share button
	document.getElementById( "share-related-graph-button" ).disabled = true;
}

function shareRelatedGraph() {
	showPopup();

	// expand the related graph
	showOrHideRelatedFiles( "share-all-file-button" );
}