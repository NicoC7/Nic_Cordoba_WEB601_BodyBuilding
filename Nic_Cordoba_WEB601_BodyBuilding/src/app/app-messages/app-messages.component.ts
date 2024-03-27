import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class AppMessagesComponent {

  private messagesSubject = new Subject<string>();
  messages = this.messagesSubject.asObservable();

  addMessage(message: string) {
    this.messagesSubject.next(message);
  }

  
}
