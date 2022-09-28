let arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

function onOpen() {
	DocumentApp.getUi().createMenu('Arabic Replacer').addItem('Convert digits to arabic', 'changeDigits').addToUi();
}

function changeDigits() {
	let body = DocumentApp.getActiveDocument().getBody();
	let textString = body.getText();
	let textObject = body.editAsText();

	for (let i = 0; i < textString.length; i++) {
		if (textString[i].match(/\d/)) {
			textObject.deleteText(i, i);
			textObject.insertText(i, arabicNumbers[parseInt(textString[i])]);
		}
	}
}
