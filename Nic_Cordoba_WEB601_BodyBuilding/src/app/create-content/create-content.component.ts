import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent implements OnInit{  
  ngOnInit(): void {}

  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imageURL: '',
    type: '',
    tags: []
  };

  errorMessage: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  addContent(contentForm: NgForm) {

    if (!this.newContent.title  || !this.newContent.id) {

      this.errorMessage =  ' You must fill all the information';
      return;
    }
    


  const promise = new Promise<Content>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(this.newContent);
      } else {
        reject('It wasnt posible to add the content');
      }
    }, 500);
  });

  promise.then(
    (newContent) => {
      this.contentAdded.emit(newContent);
      this.newContent = { ...this.newContent, id: 0, title: '' };
      contentForm.resetForm();
      this.errorMessage = '';
    },
    (error) => {
      if (error === 'You must fill all the information') {
        this.errorMessage = 'Content creation failed: ' + error; 
      } else {
        this.errorMessage = 'Error: ' + error;
      }
    
    }
      );
  }
}
