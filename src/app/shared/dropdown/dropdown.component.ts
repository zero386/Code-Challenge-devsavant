import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownItem, Icon } from '../../core/models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() public items: DropdownItem[] = [];
  @Input() public text: string = '';
  @Input() public icon: Icon = { display: false, src: 'assets/settings-icon.png' };
  @Output() public onChangeItem = new EventEmitter<DropdownItem>();
  constructor() { }

  public ngOnInit() {
  }

  public changeItem(item: DropdownItem) {
    this.text = item.displayName;
    this.onChangeItem.emit(item);
  }

}
