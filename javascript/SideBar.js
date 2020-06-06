function ToggleExpandContact( buttonId, expandContactId ) {
	const content = document.getElementById( expandContactId );
	const button = document.getElementById( buttonId );
	const flexContainer = button.getElementsByClassName( "flex-container" )[0];
	if( content.style.display === "none" ) {
		content.style.display = "block";

		// change the direction of the triangle beside the folder
		const triangle = flexContainer.getElementsByClassName( "triangle-right" )[0];
		triangle.classList.replace( "triangle-right", "triangle-bottom" );

		// change the padding so the new triangle lined up with the one on the top
		flexContainer.style.paddingLeft = "10px";

	} else {
		content.style.display = "none";

		// change the direction of the triangle beside the folder
		const triangle = flexContainer.getElementsByClassName( "triangle-bottom" )[0];
		triangle.classList.replace( "triangle-bottom", "triangle-right" );

		// change the padding back
		flexContainer.style.paddingLeft = "20px";
	}
}

function changeSideBarButtonColor( buttonId ) {
	// change the background color of this button
	const buttons = document.getElementsByClassName( "side-bar-button" );
	for( let i = 0; i < buttons.length; i++ ) {
		// change background color of all buttons to the default one
		buttons[i].style.backgroundColor = "#b3d9ff";
	}

	// update the background color of the button clicked
	console.log( buttonId )
	console.log(document.getElementById( buttonId ).style.backgroundColor)
	document.getElementById( buttonId ).style.backgroundColor = "#87CEEB";
	console.log(document.getElementById( buttonId ).style.backgroundColor)
}