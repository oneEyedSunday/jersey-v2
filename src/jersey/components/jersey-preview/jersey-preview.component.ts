import { Component, ChangeDetectionStrategy,
  Input, OnChanges, SimpleChanges, ViewChild,
  ElementRef,
 } from '@angular/core';
import { Jersey } from '../../models/jersey';
import { SvgEditorService } from '../../core/svg-editor.service';

interface Coords {
  x: string;
  y: string;
}

interface BBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Component({
  selector: ' [app-jersey-base-svg] ',
  template: `
  <svg:g [innerHtml]=" baseSvgContent | safe: 'html'  " id="base"></svg:g>
  `,
})
export class JerseyBaseComponent {
  @Input() baseSvgContent;
  constructor() {
  }
}

@Component({
  selector: 'app-jersey-preview',
  templateUrl: './jersey-preview.component.html',
  styleUrls: ['./jersey-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JerseyPreviewComponent implements OnChanges {
  @Input() jersey: Jersey;
  @ViewChild('jerseyTextRef') jerseyTextNode;
  _svgEditor: SvgEditorService;
  editorInitialized = false;
  constructor(private svgEditor: SvgEditorService) {
    this._svgEditor = svgEditor;
  }

  get numberCoords(): Coords {
    const position = {
      x: '300',
      y: '180'
    };

    if (this.jersey.badge_position === 'left') {
      position.x = '300';
    } else if (this.jersey.badge_position === 'right') {
      position.x = '160';
    }
    return position;
  }

  get badgeCoords(): Coords {
    const position: Coords = {
      x: '160',
      y: '140'
    };
    if (this.jersey.badge_position === 'right') {
      position.x = '300';
    } else if (this.jersey.badge_position === 'center') {
      position.x = '230';
    }
    return position;
  }

  get contentBox(): BBox {
    return this.jerseyTextNode.nativeElement.getBBox();
  }

  get jerseyTextCoords() {
    // remember to update maxlength of jersey text
    // using the contentBox above to get the coords for text
    // reduce font size
    // adjust starting position to create a 'justified' feel
    return '';
  }

  decorateText() {
    // to insert decorative content like
    // breaks <br />>
    return '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.jersey.previousValue === undefined) {
      console.log('init');
    }
}
