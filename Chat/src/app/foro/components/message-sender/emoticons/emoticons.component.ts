import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emoticons',
  templateUrl: './emoticons.component.html',
  styleUrls: ['./emoticons.component.scss']
})
export class EmoticonsComponent implements OnInit {

  @Output() emojiSelected = new EventEmitter<string>();

  emoticons: object;
  constructor() {
    this.emoticons = [
      '\u{1F600}',
      '\u{1F603}',
      '\u{1F604}',
      '\u{1F601}',
      '\u{1F606}',
      '\u{1F605}',
      '\u{1F923}',
      '\u{1F602}',
      '\u{1F642}',
      '\u{1F643}',
      '\u{1F609}',
      '\u{1F60A}',
      '\u{1F607}',
      '\u{1F60D}',
      '\u{1F929}',
      '\u{1F618}',
      '\u{1F617}',
      '\u{263A}',
      '\u{1F61A}',
      '\u{1F619}',
      '\u{1F60B}',
      '\u{1F61B}',
      '\u{1F61C}',
      '\u{1F92A}',
      '\u{1F61D}',
      '\u{1F911}',
      '\u{1F917}',
      '\u{1F92D}',
      '\u{1F92B}',
      '\u{1F914}',
      '\u{1F910}',
      '\u{1F928}',
      '\u{1F610}',
      '\u{1F611}',
      '\u{1F636}',
      '\u{1F60F}',
      '\u{1F612}',
      '\u{1F644}',
      '\u{1F62C}',
      '\u{1F925}',
      '\u{1F60C}',
      '\u{1F614}',
      '\u{1F62A}',
      '\u{1F924}',
      '\u{1F634}',
      '\u{1F637}',
      '\u{1F912}',
      '\u{1F915}',
      '\u{1F922}',
      '\u{1F92E}',
      '\u{1F927}',
      '\u{1F635}',
      '\u{1F92F}',
      '\u{1F920}',
      '\u{1F60E}',
      '\u{1F913}',
      '\u{1F9D0}',
      '\u{1F615}',
      '\u{1F61F}',
      '\u{1F641}',
      '\u{2639}',
      '\u{1F62E}',
      '\u{1F632}',
      '\u{1F633}',
      '\u{1F626}',
      '\u{1F627}',
      '\u{1F628}',
      '\u{1F630}',
      '\u{1F625}',
      '\u{1F622}',
      '\u{1F62D}',
      '\u{1F631}',
      '\u{1F616}',
      '\u{1F623}',
      '\u{1F61E}',
      '\u{1F613}',
      '\u{1F629}',
      '\u{1F62B}',
      '\u{1F624}',
      '\u{1F621}',
      '\u{1F620}',
      '\u{1F92C}',
      '\u{1F608}',
      '\u{1F47F}',
      '\u{1F480}',
      '\u{2620}',
      '\u{1F4A9}',
      '\u{1F47D}',
      '\u{1F648}',
      '\u{1F649}',
      '\u{1F64A}',
      '\u{1F496}',
      '\u{1F497}',
      '\u{1F493}',
      '\u{1F49E}',
      '\u{1F495}',
      '\u{1F494}',
      '\u{2764}',
      '\u{1F49B}',
      '\u{1F49A}',
      '\u{1F499}',
      '\u{1F4AF}',
      '\u{1F44C}'
      // 134 https://unicode.org/emoji/charts/full-emoji-list.html
    ];
  }

  ngOnInit() {
  }

  getEmoticonCodes() {
    return this.emoticons;
  }

  emitSelectedEmoticon(code) {
    this.emojiSelected.emit(code);
  }

}
