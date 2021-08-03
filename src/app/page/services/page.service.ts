import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DropdownItem } from '../../core/models';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private httpClient: HttpClient) { }

  public getPageSettings(): Observable<DropdownItem[]> {
    return of([{ id: 1, name: 'preview', displayName: 'Preview Mode', icon: 'fas fa-eye' },
               { id: 2, name: 'edit', displayName: 'Edition Mode', icon: 'fas fa-pencil-alt'} ]);
  }
}
