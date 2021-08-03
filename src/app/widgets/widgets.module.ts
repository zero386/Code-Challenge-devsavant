import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { TextfieldWidgetComponent } from './textfield-widget/textfield-widget.component';
import { WelcomeWidgetComponent } from './welcome-widget/welcome-widget.component';
import { WidgetService } from './services/widget.service';
import { WidgetComponent } from './widget/widget.component';
import { ControlFactoryDirective } from '../directives/control-factory.directive';

@NgModule({
  declarations: [
    ImageWidgetComponent,
    TextfieldWidgetComponent,
    WelcomeWidgetComponent,
    WidgetComponent,
    ControlFactoryDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [WidgetComponent, ImageWidgetComponent, TextfieldWidgetComponent, WelcomeWidgetComponent],
  providers: [WidgetService]
})
export class WidgetsModule { }
