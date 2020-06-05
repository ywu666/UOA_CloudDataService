function hoverFolderImage( folderButtonId ) {
	const img = document.getElementById(folderButtonId).getElementsByClassName("folder")[0];
	img.style.opacity = "0.5";
}

function resetImage( folderButtonId ) {
	const img = document.getElementById(folderButtonId).getElementsByClassName("folder")[0];
	img.style.opacity = "1";
}

function openFolder( folderButtonId ) {
	// change directory
	const dirs = document.getElementsByClassName( "file-path" )
	for( let i = 0; i < dirs.length; i++ ) {
		dirs[i].style.display = "none";
	}

	if( folderButtonId === "softeng350-folder" ) {
		const visibleDir = document.getElementById( "softeng350-path-button" );
		visibleDir.style.display = "block";

		// hide quick access
		document.getElementById( "quick-access-component" ).style.display = "none";

		// change folders
		document.getElementById( "route-folder-container" ).style.display = "none";
		document.getElementById( "softeng350-folder-container" ).style.display = "flex";

		//show files
		document.getElementById( "softeng-350-file-container" ).style.display = "block";
	}

}