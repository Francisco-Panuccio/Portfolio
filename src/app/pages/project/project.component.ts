import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';
import { MessagesService } from '../../services/messages.service';
import projectsJson from '../../data/projects.json';
import { Language } from '../../data/messages.data';

type ProjectType = 'game' | 'application';

interface Project {
  id: string;
  name: string;
  image: string;
  description: Record<Language, string>;
  carouselImages: string[];
  hasGithubCode: boolean;
  githubCode: string;
  hasPage: boolean;
  page: string;
  technologies: string[];
  features: Record<Language, string[]>;
  type: ProjectType;
  releaseDate: string;
}

@Component({
  selector: 'app-project',
  imports: [LoadingComponent, HeaderComponent, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  loading: boolean = true;
  project?: Project;
  selectedImageIndex: number = 0;
  readonly projects = projectsJson as Project[];

  constructor(
    private readonly route: ActivatedRoute,
    public readonly messagesService: MessagesService
  ) { }

  get selectedImage(): string {
    return this.project?.carouselImages[this.selectedImageIndex] ?? '';
  }

  get projectTypeLabel(): string {
    if (!this.project) {
      return '';
    }

    return this.project.type === 'game'
      ? this.messagesService.texts().projects.filters.game
      : this.messagesService.texts().projects.filters.application;
  }

  previousImage(): void {
    if (!this.project) {
      return;
    }

    this.selectedImageIndex = this.selectedImageIndex === 0
      ? this.project.carouselImages.length - 1
      : this.selectedImageIndex - 1;
  }

  nextImage(): void {
    if (!this.project) {
      return;
    }

    this.selectedImageIndex = this.selectedImageIndex === this.project.carouselImages.length - 1
      ? 0
      : this.selectedImageIndex + 1;
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  technologyLogo(technology: string): string {
    const normalizedTechnology = technology.toLowerCase().replace('.', '').replace('js', '');
    const logos: Record<string, string> = {
      angular: 'images/logos/angular.png',
      typescript: 'images/logos/typescript.png',
      javascript: 'images/logos/javascript.png',
      css: 'images/logos/css.png',
      ionic: 'images/logos/angular.png',
      supabase: 'images/logos/supabase.png',
      vercel: 'images/logos/logo.png',
      react: 'images/logos/react.png',
      node: 'images/logos/node.png',
      express: 'images/logos/express.png',
      sql: 'images/logos/sql.png',
      canvas: 'images/logos/canvas.png'
    };

    return logos[normalizedTechnology] ?? 'images/logos/logo.png';
  }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find((project) => project.id === projectId);
    this.loading = false;
  }
}
