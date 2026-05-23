import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { HeaderComponent } from '../header/header.component';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-home',
  imports: [LoadingComponent, HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loading: boolean = true;

  constructor(public readonly messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = false;
  }
}
