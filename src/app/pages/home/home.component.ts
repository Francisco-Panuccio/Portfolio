import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [LoadingComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loading: boolean = true;

  ngOnInit() {
    this.loading = false;
  }
}