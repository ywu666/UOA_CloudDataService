function hideFileRelationGraph() {
	document.getElementById( "file-relation-popup" ).style.display = "none";
}

function showDraftGraphOnly() {
	document.getElementById( "back-icon" ).style.display = "inline";
	document.getElementById( "slide-related-graph-container" ).style.display = "none";

	// place the graph in the middle
	document.getElementById( "draft-related-graph-container" ).classList.remove( "w3-cell" );
	const button  = document.getElementsByClassName( "graph-container" )[0];
	button.style.marginLeft = "150px";
	button.style.marginRight = "150px";

	// enable the share button
	document.getElementById( "share-related-graph-button" ).disabled = false;
}

function showAllGraphs() {
	// hide the back button
	document.getElementById( "back-icon" ).style.display = "none";

	// display all graphs except the empty graph
	document.getElementById( "draft-related-graph-container" ).style.display = "table-cell";
	document.getElementById( "slide-related-graph-container" ).style.display = "table-cell";
	document.getElementById( "empty-container" ).style.display = "none";

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

function showEmptyGraph() {
	// hide all graphs, display only the empty one
	document.getElementById( "draft-related-graph-container" ).style.display = "none";
	document.getElementById( "slide-related-graph-container" ).style.display = "none";
	document.getElementById( "empty-container" ).style.display = "block";

	// hide the text showing folder directory
	document.getElementById( "file-position" ).style.display = "none";

	// hide the back button
	document.getElementById( "back-icon" ).style.display = "none";

	// disable share button
	document.getElementById( "share-related-graph-button" ).disabled = true;
}