function changeFolderDirectory( folderGoingInto ) {
	// homepage: homepage-dropdown-button
	// softeng350 folder: softeng350-path-button

	let i;
	const elements = document.getElementsByClassName("file-path");
	for(i = 0; i < elements.length; i++ ) {
		elements[i].style.display = "none";
	}

	document.getElementById(folderGoingInto).style.display = "content";
}