export class Translation {
	
	
	originalText: string;
	translatedText: string;
	comments: string[];
	upDownVote: number[];
	
	hovered: boolean = false; 
	
	//not lazy loaded
	constructor(originalText: string, translatedText: string, upDownVote?: number[], comments?: string[] ) {
		this.originalText = originalText;
		this.translatedText = translatedText;
		this.comments = comments;
		this.upDownVote = upDownVote;
	}
	
	getText(isOriginal: boolean): string {
		if(!isOriginal) {
			return this.originalText;
		} else {
			return this.translatedText;
		}
	}
}