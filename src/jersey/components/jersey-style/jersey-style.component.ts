import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-jersey-style',
  templateUrl: './jersey-style.component.html',
  styleUrls: ['./jersey-style.component.scss']
})

// get a list of templates
// so you can programmatically create templates
export class JerseyStyleComponent {
  template: string;
  @Output() selectTemplate = new EventEmitter();
  @Input() templates: any[];
  constructor() {
  }
  selectTemplateEvent (templateName: string) {
    this.selectTemplate.emit(templateName);
  }
}
