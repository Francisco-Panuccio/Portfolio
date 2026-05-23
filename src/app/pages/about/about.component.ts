import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-about',
  imports: [LoadingComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  loading: boolean = true;

  ngOnInit() {
    this.loading = false;
  }
}
