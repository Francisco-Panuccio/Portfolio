import { Component } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-project',
  imports: [LoadingComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  loading: boolean = true;

  ngOnInit() {
    this.loading = false;
  }
}
