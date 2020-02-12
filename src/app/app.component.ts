import { Component } from '@angular/core';
import { Translation } from './main/translation/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	sidebarOpened: boolean = false;
	currentTranslation: Translation;
  
	originalTexts: string[] = [ 'typescript ',
		'private String dog = new String("cat"); ',
		'int fib(int n); ',
		'"cat" == "dog"'];
		
	translatedTexts: string[] = [ 'java ',
		'private dog: String = new String("cat") ', 
		'fib(n: number): number ',
		'"cat".equals("dog");',
		]
		
	comments: string[][] = [ ['Java sux','TS is epic'],['OMEGALUL variable'],['downvote for recursion'], ['testing for string equality should use strict equality. I.E. triple equals, \'cat\' ==== \'dog\'']];
	upDownVote: number[][] = [[1,1],[2,1],[4,10],[0,10]];
	translations: Translation[];
	
	constructor() {
		this.translations = [];
		
		if(this.originalTexts.length != this.translatedTexts.length) {
			return;
		}
		
		for(var i = 0; i < this.originalTexts.length; i++) {
			this.translations.push(new Translation(this.originalTexts[i], this.translatedTexts[i], this.upDownVote[i], this.comments[i]));
		}
	}
	
	translationClicked(translation: Translation): void {
		this.sidebarOpened = true;
		this.currentTranslation = translation;
	}
}
