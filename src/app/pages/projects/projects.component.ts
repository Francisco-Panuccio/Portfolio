import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-projects',
  imports: [LoadingComponent, HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  loading: boolean = true;

  ngOnInit() {
    this.loading = false;
  }
}