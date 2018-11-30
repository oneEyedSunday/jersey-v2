import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InitialJersey as DefaultJersey } from '../../models/jersey';
@Component({
  selector: 'app-jersey-extras',
  templateUrl: './jersey-extras.component.html',
  styleUrls: ['./jersey-extras.component.scss']
})
export class JerseyExtrasComponent {

  @Input() badges: any[];
  @Output() selectBadgeEvent = new EventEmitter();
  @Output() selectBadgePositionEvent = new EventEmitter();
  badgeName: string;
  badgePosition: string = DefaultJersey.badge_position;
  public sides =  ['left', 'right', 'center'];
  constructor() { }

  selectBadge() {
    this.selectBadgeEvent.emit(this.badgeName);
  }

  selectBadgePosition() {
    this.selectBadgePositionEvent.emit(this.badgePosition);
  }
}
