import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { WidgetService} from '../services/widget.service';
@Component({
  selector: 'app-textfield-widget',
  templateUrl: './textfield-widget.component.html',
  styleUrls: ['./textfield-widget.component.css'],
})
export class TextfieldWidgetComponent implements OnInit, OnChanges {

  public text: string = '';
  @Input() public previewMode: boolean = false;
  constructor(private widgetService: WidgetService) { }

  public ngOnInit() {
    this.widgetService.textFieldValue$.subscribe((data) => this.text = data);
  }

  public ngOnChanges() {
    this.widgetService.textFieldValue$.subscribe((data) => console.log(data));
  }

  public changeText() {
    this.widgetService.textFieldValue$.next(this.text);
  }

}
