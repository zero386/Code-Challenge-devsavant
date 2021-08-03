import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlFactoryDirective } from '../../directives/control-factory.directive';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit, OnChanges {

  @Input() public widgetName: string = '';
  @Input() public previewMode: boolean = false;
  @Input() public params: any;
  constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {

  }

}
