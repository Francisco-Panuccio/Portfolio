import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-contact',
  imports: [LoadingComponent, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  loading: boolean = true;

  ngOnInit() {
    this.loading = false;
  }
}
