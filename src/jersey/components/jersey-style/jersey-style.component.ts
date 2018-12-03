import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-jersey-style',
  templateUrl: './jersey-style.component.html',
  styleUrls: ['./jersey-style.component.scss']
})

// get a list of templates
// so you can programmatically create templates
export class JerseyStyleComponent implements OnInit {
  template: string;
  @Output() selectTemplate = new EventEmitter();
  @Input() templates: any[];
  @Input() selectedTemplate: string;
  constructor() {
  }

  ngOnInit () {
    this.template = this.selectedTemplate;
  }
  selectTemplateEvent (templateName: string) {
    this.selectTemplate.emit(templateName);
  }
}
