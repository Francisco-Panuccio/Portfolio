import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { HeaderComponent } from "../header/header.component";
import { MessagesService } from '../../services/messages.service';
import projectsJson from '../../data/projects.json';
import { Language } from '../../data/messages.data';

type ProjectType = 'game' | 'application';
type ProjectFilter = 'all' | ProjectType;

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
  selector: 'app-projects',
  imports: [LoadingComponent, HeaderComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsScroller') private readonly projectsScroller?: ElementRef<HTMLElement>;

  loading: boolean = true;
  selectedFilter: ProjectFilter = 'all';
  hasScrolledProjects: boolean = false;
  hasMoreProjectsBelow: boolean = true;
  readonly projects = projectsJson as Project[];

  constructor(public readonly messagesService: MessagesService) { }

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.type === this.selectedFilter);
  }

  selectFilter(filter: ProjectFilter): void {
    this.selectedFilter = filter;
    queueMicrotask(() => this.updateScrollFades(this.projectsScroller?.nativeElement));
  }

  onProjectsScroll(event: Event): void {
    this.updateScrollFades(event.target as HTMLElement);
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => this.updateScrollFades(this.projectsScroller?.nativeElement));
  }

  private updateScrollFades(element?: HTMLElement): void {
    if (!element) {
      return;
    }

    this.hasScrolledProjects = element.scrollTop > 0;
    this.hasMoreProjectsBelow = element.scrollTop + element.clientHeight < element.scrollHeight - 1;
  }
  
  ngOnInit() {
    this.loading = false;
  }
}
