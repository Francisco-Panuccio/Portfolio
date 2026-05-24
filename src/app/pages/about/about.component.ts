import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-about',
  imports: [LoadingComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  loading: boolean = true;

  constructor(public readonly messagesService: MessagesService) { }

  get cvUrl(): string {
    return this.messagesService.language() === 'en'
      ? 'data/Francisco Panuccio CV eng.pdf'
      : 'data/Francisco Panuccio CV.pdf';
  }

  ngOnInit() {
    this.loading = false;
  }
}
