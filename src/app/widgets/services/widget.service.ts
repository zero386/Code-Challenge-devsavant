import { Injectable } from '@angular/core';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DropdownItem } from '../../core/models';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  private textChange: string = '';
  public textFieldValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public imagesValue$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private httpClient: HttpClient) {

  }

  public getWidgets(): Observable<DropdownItem[]> {
    return of([{ id: 1, name: 'ImageWidget', displayName: 'Image Widget', icon: 'fas fa-image'  },
               { id: 2, name: 'TextfieldWidget', displayName: 'Text Widget', icon: 'fas fa-font' },
               { id: 3, name: 'WelcomeWidget', displayName: 'Hello Widget', icon: 'fab fa-ello' }  ])
  }

  public getWidgetStructure() {
    
  }

  public setTextChange(text: string) {
    this.textChange = text;
  }

  public getTextChange(): string {
    return this.textChange;
  }

}
