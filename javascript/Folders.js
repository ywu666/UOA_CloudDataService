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

	if( folderButtonId === "Softeng350-folder" || folderButtonId === "Enggen303-folder" || folderButtonId === "Softeng351-folder" || folderButtonId === "Softeng364-folder" || folderButtonId === "Others-button" || folderButtonId === "Previous-button" || folderButtonId === "Recent-button" || folderButtonId === "Star-button" || folderButtonId === "Trash-button" ) {
		//display the corresponding path button
		const substr = folderButtonId.substr(0,folderButtonId.indexOf("-"));
		btn = document.getElementById("folderNameButton")
		btn.innerHTML = substr + '<i class="fa fa-caret-down"></i>';
		document.getElementById("softeng350-folder-path").style.display = "block";

		// hide quick access
		document.getElementById( "quick-access-component" ).style.display = "none";

		// change folders
		document.getElementById( "route-folder-container" ).style.display = "none";
		document.getElementById( "softeng350-folder-container" ).style.display = "flex";

		//show files
		document.getElementById( "file-section" ).style.display = "block";
		document.getElementById("folders-tittle").style.justifyContent = "between";
	}


}