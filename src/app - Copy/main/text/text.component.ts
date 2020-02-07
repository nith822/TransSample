import { Component, OnInit, Input } from '@angular/core';
import { Text } from './text';



@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
	
	@Input() textString: string;
	@Input() text1: Text;
	
	constructor() { }

	ngOnInit() {
	}

}
