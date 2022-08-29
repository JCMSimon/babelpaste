// used to trigger paste execution
const submitButton = document.getElementById('submitButton')
// used to disable button while getting paste
const infoButton = document.getElementById('infoButton')
// used to clear and change things in the text field
const textField = document.getElementById('textField')
// used to signal errors
const alertText = document.getElementById("alertText")

const allowedChars = "abcdefghijklmnopqrstuvwxyz ,."

let finishedPasteText

attachEventListeners();

function submitButtonFunction() {
	clearAlert();
	deactivateButtons();
	let rawPasteText = getTextFromField();
	console.log(rawPasteText)
	if (rawPasteText == "") {
		setAlert("No Text found");
		activateButtons();
		return;
	} else {
		let counter = 0;
		[...allowedChars].forEach(char => {
			if (rawPasteText.includes(char)) {
				counter += 1
				}
			}
		)
			if (counter == 0) {
				console.log(counter)
				setAlert("No Text found after conversion");
				activateButtons();
				return;
			}
		}
	if (rawPasteText.length > 3200) {
		setAlert("Text too long");
		activateButtons();
		return;
	}
	clearTextField();
	try {
		finishedPasteText = convertPaste(rawPasteText)
	}
	catch (e)  {
		console.log(e.message);
		setAlert("Smth went wrong (JCMS#0557)")
		activateButtons();
	}
	console.log(finishedPasteText)
	// check if text is over 3200 chars
	// if true
	//		setAlert("Paste too long after conversion")
	// 		setTextField(rawPasteText)
	// if false
	// try {
	// 	let hex, wall, shelf, volume, page = postSearchRequest(finishedPasteText);
	// }
	// catch {
	// 	setAlert("smth went wrong (contact info here)")
	// 	activateButtons();
	// }
	// try {
	// 	let title = postBookmarkRequest(hex, wall, shelf, volume, page)
	// }
	// catch {
	// 	setAlert("smth went wrong (contact info here)")
	// 	activateButtons();
	// }

	// let finalLink = `https://libraryofbabel.info/bookmark.cgi?${title}`
	// setTextField(finalLink);
	activateButtons();
}

function convertPaste(rawpasteText) {
	let mapping = {".in.":"9",".ig.":"8",".ev.":"7",".x.":"6",".iv.":"5",".ou.":"4",".re.":"3",".t.":"2",".n.":"1",".er.":"0",".ex.":"!",".es.":"?",".qu.":'"',".pa.":"§",".do.":"$",".pe.":"%",".a.":"&",".eq.":"=",".fs.":"/",".bs.":"\\",".bo.":"(",".bc.":")",".cbc.":"}",".cbo.":"{",".sbc.":"]",".sbo.":"[",".ca.":"^",".de.":"°",".ls.":"<",".gt.":">",".or.":"|",".se.":";",".co.":":",".mi.":"-",".un.":"_",".ha.":"#",".sq.":"'",".fa.":"´",".fb.":"`",".pl.":"+",".st.":"*",".ti.":"~"};
	var result = ""
	for(let key in mapping) {
		var value = mapping[key];
		console.log(`Replacing ${value} with ${key}`);
		result = rawpasteText.replace(`${value}`,`${key}`)
		console.log(result)
	  }
	  return result
}

function deactivateButtons() {
	submitButton.disabled = true
	infoButton.disabled = true
}

function activateButtons() {
	submitButton.disabled = false
	infoButton.disabled = false
}

function getTextFromField() {
	return textField.value
}

function postSearchRequest(term) {
	console.log("do the fetch thing here")
}

function postBookmarkRequest(hex, wall, shelf, volume, page, title = "") {
	console.log("do the fetch thing here 2.0")
}

function clearTextField() {
	textField.value = ""
}

function setTextField(text) {
	textField.value = `${text}`
}

function setAlert(alertMessage) {
	alertText.innerText = `${alertMessage}`
}

function clearAlert() {
	alertText.innerText = "­"
}

function attachEventListeners() {
	submitButton.addEventListener('click', submitButtonFunction);
}