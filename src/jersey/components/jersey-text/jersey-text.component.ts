import { Component, Output, EventEmitter } from '@angular/core';
import { InitialJersey as DefaultJersey } from './../../models/jersey';

@Component({
  selector: 'app-jersey-text',
  templateUrl: './jersey-text.component.html',
  styleUrls: ['./jersey-text.component.scss']
})
export class JerseyTextComponent {
  sponsorText = DefaultJersey.text;
  jerseyNumber = DefaultJersey.number;
  jerseyFontType = DefaultJersey.font;
  jerseyPrimaryColor = DefaultJersey.pricolor;
  jerseySecondaryColor = DefaultJersey.seccolor;
  @Output() selectJerseyFontEvent = new EventEmitter;
  @Output() selectJerseyTextEvent = new EventEmitter;
  @Output() selectJerseyNumberEvent = new EventEmitter;
  @Output() selectJerseyPrimaryColorEvent = new EventEmitter;
  @Output() selectJerseySecondaryColorEvent = new EventEmitter;
  constructor() { }

  selectFont(fontType: string) {
    this.selectJerseyFontEvent.emit(fontType);
  }

  // todo
  // add validation to reduce length
  addText(text: string) {
    this.selectJerseyTextEvent.emit(text);
  }

  selectNumber(kitnumber: string) {
    this.selectJerseyNumberEvent.emit(kitnumber);
  }

  selectPrimaryColor(color: string) {
    this.selectJerseyPrimaryColorEvent.emit(color);
  }

  selectSecondaryColor(color: string) {
    this.selectJerseySecondaryColorEvent.emit(color);
  }
}
