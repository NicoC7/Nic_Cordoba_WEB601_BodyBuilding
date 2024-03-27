import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentTypeFilterPipe} from '../content-type-filter.pipe';
import { FormsModule } from '@angular/forms';
import {HoverAffectDirective} from "../hover-affect.directive";
import { CreateContentComponent } from "../create-content/create-content.component";
import { ContentListService } from '../body-building-service.service';

@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    standalone: true,
    styleUrls: ['./content-list.component.scss'],
    imports: [CommonModule, ContentTypeFilterPipe, FormsModule, HoverAffectDirective, CreateContentComponent]
})
export class ContentListComponent implements OnInit {


  myContentArray: Content[] = [];
  featuredContent: Content | null = null;

  constructor(private contentListService: ContentListService) {}

  searchTitle: string = '';
  searchResultMessage: string = '';
  searchResultMessageColor: string = '';
  foundContent: Content | null = null;

  ngOnInit() {
    this.contentListService.getContent().subscribe(content => {
      this.myContentArray = content;
    });
  }


  searchContent() {
    const foundContent = this.myContentArray.find(content => content.title === this.searchTitle);
    if (foundContent) {
      this.searchResultMessage = `Content with title "${this.searchTitle}" exists!`;
      this.searchResultMessageColor = 'green';
    } else {
      this.searchResultMessage = `Content with title "${this.searchTitle}" does not exist!`;
      this.searchResultMessageColor = 'red';
    }
  }

  shouldHighlightContent(content: Content): boolean {
    const shouldHighlight = content.title === this.searchTitle && this.searchResultMessageColor === 'green';
    //console.log('Should highlight:', shouldHighlight);
    return shouldHighlight;
  }

  handleContentAdded(newContent: Content) {
    // this.myContentArray.push({ ...newContent }); 
    this.myContentArray = [...this.myContentArray, newContent];
    console.log('Content was added', newContent.title);
    console.log('Updated Array:', this.myContentArray);
 }
    

}

export { Content };
