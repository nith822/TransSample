import { Component } from '@angular/core';
import { Translation } from './main/translation/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	originalTexts: string[] = [ 'typescript ',
		'private String dog = new String("cat"); ',
		'int fib(int n); ',
		'"cat".equals("dog"); '];
		
	translatedTexts: string[] = [ 'java ',
		'private dog: String = new String("cat") ', 
		'fib(n: number): number ',
		'"cat" === "dog" ',
		]
		
	translations: Translation[];
	
	constructor() {
		this.translations = [];
		
		if(this.originalTexts.length != this.translatedTexts.length) {
			return;
		}
		
		for(var i = 0; i < this.originalTexts.length; i++) {
			this.translations.push(new Translation(this.originalTexts[i], this.translatedTexts[i]));
		}
	}
}
