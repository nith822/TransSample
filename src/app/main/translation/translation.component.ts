import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Translation } from './translation';

@Component({
  selector: 'translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

	@Input() translation: Translation;
	@Input() displayOriginal: boolean;
	@Output() clicked: EventEmitter<Translation> = new EventEmitter<Translation>();
	constructor() { }

	ngOnInit() {
	}

	getTextString(): string {
		return this.translation.getText(this.displayOriginal);
	}
	
	getBackgroundColor(): string {
		//if(showupDownVote option disabled) {
		//	return;
		//}
		if(this.translation.upDownVote) {
			var upvoteInput = this.translation.upDownVote[0];
			var downvoteInput = this.translation.upDownVote[1];
			var ratio = upvoteInput/(upvoteInput+downvoteInput);
			return this.getColorForPercentage(ratio);
		}
		
		//some function taking these two inputs and outputting a hexcolor between red and green
		//Red	(255, 0, 0)	#FF0000
		//Green	(0, 255, 0)	#00FF00
		//https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage/7128796
		return '#FFFFFFF'
	}
	
	

	getColorForPercentage(pct) {
		
	var percentColors = [
    { pct: 0.0, color: { r: 0xff, g: 0x66, b: 0x66 } },
    { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0xff } },
    { pct: 1.0, color: { r: 0x66, g: 0xff, b: 0x66 } } ];
	
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
	
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    // or output as hex if preferred
};
}
