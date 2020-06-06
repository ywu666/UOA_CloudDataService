function ToggleExpandContact( buttonId, explandContactId ) {
	const content = document.getElementById( explandContactId );
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