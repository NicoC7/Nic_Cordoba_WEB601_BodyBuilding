import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  displayContentInfo(content: any) {
    console.log('Clicked Content:', content.id, content.title);
  }
 

  contentItems = [
    {
      id: 1,
      title: 'Content 1',
      image: 'path/to/image1.jpg',
      description: 'Description 1',
      creator: 'Creator 1',
      type: 'Type 1',
      tags: ['Tag1', 'Tag2']
    },
  ];
}

