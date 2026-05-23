import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagePreloadService } from './services/image-preload.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private readonly imagePreloadService: ImagePreloadService) {
    this.imagePreloadService.preloadAll();
  }
}
