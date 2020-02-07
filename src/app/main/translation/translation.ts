export class Translation {
	
	originalText: string;
	translatedText: string;
	
	hovered: boolean = false; 
	
	constructor(originalText: string, translatedText: string) {
		this.originalText = originalText;
		this.translatedText = translatedText;
	}
	
	getText(isOriginal: boolean): string {
		if(!isOriginal) {
			return this.originalText;
		} else {
			return this.translatedText;
		}
	}
}