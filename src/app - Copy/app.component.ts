import { Component } from '@angular/core';
import { Text } from './main/text/text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The brown fox jumped over the wooden fence.';
  text: Text = new Text('hi');
  texts: string[] = [ 'いつまでも叔父の世話になるのは嫌だったので、わざわざ昔住んでいたこの宮浦の町の高校を選んだ。',

'確かに、手を伸ばせば宇宙に届く時代、わざわざ望遠鏡で星を観察する酔狂者はいないのかもしれない。',

'っていうか、『燕の子安貝』を持ってこいだなんて、あなたはかぐや姫ですか。]'];
}
