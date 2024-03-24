import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  @Output() contentAdded = new EventEmitter<Content>();
  newContent: Content = { id: 0, title: '', description: '', creator: '', imageURL: '', tags: [], type: '' };
  tagInput: string = '';

  addContent(): void {
    const tags = this.tagInput.split(',').map(tag => tag.trim());
    this.newContent.tags = tags;
    this.contentAdded.emit(this.newContent);
    this.tagInput;
  }
}
