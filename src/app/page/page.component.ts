import { Component, OnInit } from '@angular/core';
import { DropdownItem, Icon, WidgetStructure } from '../core/models';
import { WidgetService } from '../widgets/services/widget.service';
import { PageService } from './services/page.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {

  public widgetCatalog: DropdownItem[] = [];
  public settings: DropdownItem[] = [];
  public widgetArray: any[] = [];
  public isPreview: boolean = false;
  public isEdition: boolean = false;
  public icon: Icon = { display: true, src: 'assets/settings-icon.png' };
  constructor(private widgetService: WidgetService,
              private dragulaService: DragulaService,
              private pageService: PageService) { }

  public ngOnInit() {
    this.widgetService.getWidgets().subscribe((widgetList) => {
      this.widgetCatalog = widgetList;
    },
    (error) => {

    },
    () => {

    });
    this.pageService.getPageSettings().subscribe((settings) => {
      this.settings = settings;
    },
    (error) => {

    },
    () => {

    });

    const widgets = this.dragulaService.find('WIDGETS');
    if (widgets !== undefined) {
      this.dragulaService.destroy('WIDGETS');
    }

    this.dragulaService.createGroup('IMAGES', {
      direction: 'horizontal',
      moves: (el, container, handle: any) => {
        return handle.classList.contains('move-action');
      }
    });

  }

  public selectWidget($event: DropdownItem) {
    this.widgetArray.push( { name: $event.name, displayName: $event.displayName });
  }

  public selectSetting($event: DropdownItem) {
    if ($event.name === 'preview') {
      this.isEdition = false;
      this.isPreview = true;
    } else if ($event.name === 'edit') {
      this.isEdition = true;
      this.isPreview = false;
    } else {
      this.isEdition = false;
      this.isPreview = false;
    }
  }

}
