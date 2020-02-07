import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Translation } from './translation';

@Component({
  selector: 'translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

	@Input() translation: Translation;
	@Input() displayOriginal: boolean;
	constructor() { }

	ngOnInit() {
	}

}
