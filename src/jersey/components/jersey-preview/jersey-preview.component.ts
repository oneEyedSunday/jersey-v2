import { Component, ChangeDetectionStrategy,
  Input, OnChanges, SimpleChanges
 } from '@angular/core';
import { Jersey, InitialJersey as DefaultJersey } from '../../models/jersey';

@Component({
  selector: 'app-jersey-preview',
  templateUrl: './jersey-preview.component.html',
  styleUrls: ['./jersey-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JerseyPreviewComponent implements OnChanges {
  @Input() jersey: Jersey;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }
}
