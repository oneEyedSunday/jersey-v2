import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getJersey } from '../store';
import { RESET } from '../store/actions';
import { Jersey as JerseyModel } from '../models/jersey';
import { JerseyPreviewComponent } from '../components';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent {
  jersey: JerseyModel;
  jerseyState$: Observable<JerseyModel>;
  @ViewChild(JerseyPreviewComponent) svgRefNode: JerseyPreviewComponent;
  @ViewChild('canvasRef') canvasRefNode: ElementRef;
  @ViewChild('downloadLinkRef') downloadLinkNode: ElementRef;
  base64svg: string = undefined;
  svgConverted = false;
  constructor(private store: Store<JerseyModel>) {
    this.jerseyState$ = store.pipe(select(getJersey));
  }

  newJersey() {
    this.store.dispatch({
      type: RESET
    });
  }

  initiateDownload() {
    const ctx = this.canvasRefNode.nativeElement.getContext('2d');
    const data = (new XMLSerializer()).serializeToString(this.svgRefNode.svgNode.nativeElement);
    const DOMURL = window.URL;
    const image = new Image();
    const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=iso-8859-1'});
    const url = DOMURL.createObjectURL(svgBlob);

    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      DOMURL.revokeObjectURL(url);
      const imageURI = this.canvasRefNode.nativeElement.toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      this.triggerDownload(imageURI);
    };
    image.src = url;
  }

  triggerDownload(url: string) {
    this.downloadLinkNode.nativeElement.setAttribute('href', url);
    this.downloadLinkNode.nativeElement.setAttribute('download', 'myCustomJersey.png');
    const event = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    this.downloadLinkNode.nativeElement.dispatchEvent(event);
  }

}
