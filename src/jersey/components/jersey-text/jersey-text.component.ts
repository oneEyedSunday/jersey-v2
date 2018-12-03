import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { InitialJersey as DefaultJersey, Jersey} from './../../models/jersey';

@Component({
  selector: 'app-jersey-text',
  templateUrl: './jersey-text.component.html',
  styleUrls: ['./jersey-text.component.scss']
})
export class JerseyTextComponent implements OnInit {
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
  @Input() currentJersey: Jersey;
  constructor() { }

  ngOnInit() {
    if (this.currentJersey) {
      this.sponsorText = this.currentJersey.text;
      this.jerseyNumber = this.currentJersey.number;
      this.jerseyFontType = this.currentJersey.font;
      this.jerseyPrimaryColor = this.currentJersey.pricolor;
      this.jerseySecondaryColor = this.currentJersey.seccolor;
    }
  }

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
