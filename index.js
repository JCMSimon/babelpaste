// used to trigger paste execution
const submitButton = document.getElementById('submitButton')
// used to disable button while getting paste
const infoButton = document.getElementById('infoButton')
// used to clear and change things in the text field
const textField = document.getElementById('textField')
// used to signal errors
const alertText = document.getElementById("alertText")

attachEventListeners();

function submitButtonFunction() {
	console.log("Do actual paste logic here");
	clearAlert();
	deactivateButtons();
	let rawPasteText = getTextFromField();
	// test if rawPasteText is empty
	// if true
	// 		setAlert("No Text found");
	// 		activateButtons();
	// if false
	// 	teset if rawPasteText is empty after conversion (quick test by scanning for normal chars)
	// if true
	// 		setAlert("No Text found after conversion");
	// 		activateButtons();
	// if false
	clearTextField();
	try {
		let finishedPasteText = convertPaste(rawPasteText)
	}
	catch {
		setAlert("smth went wrong (contact info here)")
		activateButtons();
	}
	// check if text is over 3200 chars
	// if true
	//		setAlert("Paste too long after conversion")
	// 		setTextField(rawPasteText)
	// if false
	try {
		let hex, wall, shelf, volume, page = postSearchRequest(finishedPasteText);
	}
	catch {
		setAlert("smth went wrong (contact info here)")
		activateButtons();
	}
	try {
		let title = postBookmarkRequest(hex, wall, shelf, volume, page)
	}
	catch {
		setAlert("smth went wrong (contact info here)")
		activateButtons();
	}

	let finalLink = `https://libraryofbabel.info/bookmark.cgi?${title}`
	setTextField(finalLink);
	activateButtons();
}

function convertPaste(rawpasteText) {
	console.log("later")
}

function deactivateButtons() {
	console.log("idk")
}

function activateButtons() {
	console.log("idk")
}

function getTextFromField() {
	console.log("idk")
}

function postSearchRequest(term) {
	console.log("do the fetch thing here")
}

function postBookmarkRequest(hex, wall, shelf, volume, page, title = "") {
	console.log("do the fetch thing here 2.0")
}

function clearTextField() {
	textField.innerText = ""
}

function setTextField(text) {
	textField.innerText = `${text}`
}

function setAlert(alertMessage) {
	alertText.innerHTML = `${alertMessage}`
}

function clearAlert() {
	alertText.innerHTML = ""
}

function attachEventListeners() {
	submitButton.addEventListener('click', submitButtonFunction);
}