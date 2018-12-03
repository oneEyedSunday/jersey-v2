import { Component, ChangeDetectionStrategy,
  Input, ViewChild,
  ElementRef, OnInit
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
  // tslint:disable-next-line:component-selector
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
export class JerseyPreviewComponent implements OnInit {
  @Input() jersey: Jersey;
  @ViewChild('jerseyTextRef') jerseyTextNode: ElementRef;
  @ViewChild('svgNodeRef') svgNode: ElementRef;
  _svgEditor: SvgEditorService;
  initialXCoord: string = undefined;
  constructor(private svgEditor: SvgEditorService) {
    this._svgEditor = svgEditor;
  }

  ngOnInit () {
      setTimeout(() => { this.updateJerseyTextCoords(); }, 50);
  }

  updateJerseyTextCoords() {
    this.initialXCoord = this.jerseyTextCoords.x;
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

  get jerseyTextCoords(): Coords {
    const TEXTLEFTCOORD = 150;
    const position: Coords = {
      x: '150',
      y: '250'
    };

    const ACCEPTABLEEDGE = 350;
    // remember to update maxlength of jersey text
    // using the contentBox above to get the coords for text
    // reduce font size
    // adjust starting position to create a 'justified' feel

    // get width of text
    // x + width;
    // compare to acceptable edge of text
    // if space is too much
    // adjust x of text
    // so text moves to fill extra space
    if (this.contentBox.x === 0) {
      return {y: position.y, x: localStorage.getItem('jerseyv2-xcoord') || '150'};
    }
    const dLeft = TEXTLEFTCOORD - parseInt(position.x, 10);
    const dRight = ACCEPTABLEEDGE - (parseInt(position.x, 10) + this.contentBox.width);
    console.log(dLeft, dRight);
    position.x = (TEXTLEFTCOORD + ((dLeft + dRight) / 2)).toString();
    /*
    if (this.contentBox.x !== 0) {
      const spaceFromEdge = ACCEPTABLEEDGE - (this.contentBox.x + this.contentBox.width);
      // adjust starting position to center text
      position.x = (TEXTLEFTCOORD + (spaceFromEdge / 2)).toString();
    } else {
      position.x = '225';
    }
    */
   localStorage.setItem('jerseyv2-xcoord', position.x);
    return position;
  }

  decorateText() {
    // to insert decorative content like
    // breaks <br />>
    return '';
  }
}
