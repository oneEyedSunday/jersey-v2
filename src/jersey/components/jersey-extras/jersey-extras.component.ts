import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { InitialJersey as DefaultJersey, Jersey as JerseyModel } from '../../models/jersey';
@Component({
  selector: 'app-jersey-extras',
  templateUrl: './jersey-extras.component.html',
  styleUrls: ['./jersey-extras.component.scss']
})
export class JerseyExtrasComponent implements OnInit {

  @Input() badges: any[];
  @Input() currentJersey: JerseyModel;
  @Output() selectBadgeEvent = new EventEmitter();
  @Output() selectBadgePositionEvent = new EventEmitter();
  badgeName: string = DefaultJersey.badge;
  badgePosition: string = DefaultJersey.badge_position;
  public sides =  ['left', 'center', 'right'];
  constructor() { }

  ngOnInit () {
    if (this.currentJersey) {
      this.badgeName = this.currentJersey.badge;
      this.badgePosition = this.currentJersey.badge_position;
    }
  }

  selectBadge() {
    this.selectBadgeEvent.emit(this.badgeName);
  }

  selectBadgePosition() {
    this.selectBadgePositionEvent.emit(this.badgePosition);
  }
}
