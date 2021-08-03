import { Component, Input, OnInit } from '@angular/core';
import { WidgetService} from '../services/widget.service';

@Component({
  selector: 'app-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.css']
})
export class ImageWidgetComponent implements OnInit {

  @Input() public previewMode: boolean = false;
  public filesUpload: any[] = [];
  constructor(private widgetService: WidgetService) { }

  public ngOnInit() {
    this.widgetService.imagesValue$.subscribe((data) => this.filesUpload = data);
  }

  public handleFilesInput(files: any) {
    const filesX = files.target.files;
    for (let i = 0; i < filesX.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filesUpload.push({ File: filesX[i], Url: e.target.result});
        this.widgetService.imagesValue$.next(this.filesUpload);
      };
      reader.readAsDataURL(filesX[i]);
    }
  }

}
