import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { myContentArray } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})

export class ContentListService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(myContentArray);
  }

  getContentById(id: number): Observable<Content | null> {
    const foundContent = myContentArray.find(content => content.id === id);
    return of(foundContent || null);
  }
}