import { Injectable } from '@angular/core';
import { IMAGE_PATHS, PRIORITY_IMAGE_PATHS } from '../data/image-paths.data';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloadService {
  private readonly loadedImages = new Set<string>();

  preloadAll(): void {
    PRIORITY_IMAGE_PATHS.forEach((path) => this.preload(path, true));
    IMAGE_PATHS.forEach((path) => this.preload(path));
  }

  preload(path: string, priority: boolean = false): void {
    if (this.loadedImages.has(path) || typeof Image === 'undefined') {
      return;
    }

    const image = new Image();
    image.decoding = 'async';

    if (priority) {
      image.fetchPriority = 'high';
    }

    image.src = path;
    this.loadedImages.add(path);
  }
}
