function hideFileRelationGraph() {
	document.getElementById( "file-relation-popup" ).style.display = "none";
}

function showDraftGraphOnly() {
	document.getElementById( "back-icon" ).style.display = "inline";
	document.getElementById( "slide-related-graph-container" ).style.display = "none";

	const button  = document.getElementsByClassName( "graph-container" )[0];
	button.style.marginLeft = "20%";
	button.style.marginRight = "20%";
}

function showAllGraphs() {
	document.getElementById( "back-icon" ).style.display = "none";
	document.getElementById( "slide-related-graph-container" ).style.display = "table-cell";

	const button  = document.getElementsByClassName( "graph-container" )[0];
	button.style.marginLeft = "0";
	button.style.marginRight = "0";
}