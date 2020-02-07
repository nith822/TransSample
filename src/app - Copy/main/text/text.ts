export class Text {
	textString: string;
	constructor(textString: string) {
		this.textString = textString;
	}
	getText() {
		console.log(this.textString);
	}
}