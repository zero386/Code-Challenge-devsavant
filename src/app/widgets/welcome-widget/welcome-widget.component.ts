import { Component, OnInit } from '@angular/core';
import { UserSession } from '../../core/models';

@Component({
  selector: 'app-welcome-widget',
  templateUrl: './welcome-widget.component.html',
  styleUrls: ['./welcome-widget.component.css']
})
export class WelcomeWidgetComponent implements OnInit {

  public userSession: UserSession = { id: 0, user: '' };
  public currentDate: Date = new Date();
  constructor() { }

  public ngOnInit() {
  }

}
