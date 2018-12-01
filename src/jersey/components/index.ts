import { JerseyStyleComponent } from './jersey-style/jersey-style.component';
import { JerseyTextComponent } from './jersey-text/jersey-text.component';
import { JerseyExtrasComponent } from './jersey-extras/jersey-extras.component';
import { JerseyPreviewComponent } from './jersey-preview/jersey-preview.component';

export const components: any[] = [
  JerseyExtrasComponent,
  JerseyStyleComponent,
  JerseyTextComponent,
  JerseyPreviewComponent
];

export * from './jersey-style/jersey-style.component';
export * from './jersey-extras/jersey-extras.component';
export * from './jersey-text/jersey-text.component';
export * from './jersey-preview/jersey-preview.component';
