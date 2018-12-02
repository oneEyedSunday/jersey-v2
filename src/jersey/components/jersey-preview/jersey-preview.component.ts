import { Component, ChangeDetectionStrategy,
  Input, OnChanges, SimpleChanges,
  ViewChild, ElementRef, OnInit,
 } from '@angular/core';
import { Jersey, InitialJersey as DefaultJersey } from '../../models/jersey';
import { SvgEditorService } from '../../core/svg-editor.service';
@Component({
  selector: 'app-jersey-preview',
  templateUrl: './jersey-preview.component.html',
  styleUrls: ['./jersey-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JerseyPreviewComponent implements OnInit, OnChanges {
  @Input() jersey: Jersey;
  @ViewChild('svgObject') svgObjectRef: ElementRef;
  _svgEditor: SvgEditorService;
  editorInitialized = false;
  constructor(private svgEditor: SvgEditorService) {
    this._svgEditor = svgEditor;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.jersey.previousValue === undefined) {
      console.log('init');
    } else {
      if (this.editorInitialized) {
      } else {
        this._svgEditor.setReferenceToSvg(this.svgObjectRef.nativeElement.contentDocument);
        this.editorInitialized = true;
      }
      // console.log(this.svgObjectRef.nativeElement.contentDocument.childNodes[0]);
      this._svgEditor.repaintSvg();
    }
  }
}
