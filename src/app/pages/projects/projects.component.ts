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
  scrollArrowPointsUp: boolean = false;
  readonly projects = projectsJson as Project[];
  private programmaticScrollTarget: 'top' | 'bottom' | null = null;

  constructor(public readonly messagesService: MessagesService) { }

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.type === this.selectedFilter);
  }

  selectFilter(filter: ProjectFilter): void {
    this.selectedFilter = filter;
    this.scrollArrowPointsUp = false;
    this.programmaticScrollTarget = null;
    queueMicrotask(() => this.updateScrollFades(this.projectsScroller?.nativeElement));
  }

  onProjectsScroll(event: Event): void {
    this.updateScrollFades(event.target as HTMLElement);
  }

  toggleProjectsScrollEdge(): void {
    const element = this.projectsScroller?.nativeElement;

    if (!element) {
      return;
    }

    const shouldScrollDown = !this.scrollArrowPointsUp;
    const maxScroll = this.maxScroll(element);

    this.scrollArrowPointsUp = shouldScrollDown;
    this.programmaticScrollTarget = shouldScrollDown ? 'bottom' : 'top';

    element.scrollTo({
      top: shouldScrollDown ? maxScroll : 0,
      behavior: 'smooth'
    });
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => this.updateScrollFades(this.projectsScroller?.nativeElement));
  }

  private updateScrollFades(element?: HTMLElement): void {
    if (!element) {
      return;
    }

    const maxScroll = this.maxScroll(element);
    const scrollTop = Math.min(maxScroll, Math.max(0, element.scrollTop));
    const remainingScroll = maxScroll - scrollTop;
    const edgeTolerance = 2;
    const isAtTop = scrollTop <= edgeTolerance;
    const isAtBottom = remainingScroll <= edgeTolerance;
    const topFadeThreshold = this.fadeThreshold(maxScroll);
    const bottomFadeThreshold = this.fadeThreshold(maxScroll);

    this.hasScrolledProjects = scrollTop > topFadeThreshold;
    this.hasMoreProjectsBelow = remainingScroll > bottomFadeThreshold;

    if (this.programmaticScrollTarget) {
      const reachedTarget = this.programmaticScrollTarget === 'top'
        ? isAtTop
        : isAtBottom;

      if (!reachedTarget) {
        return;
      }

      this.programmaticScrollTarget = null;
    }

    if (isAtTop) {
      this.scrollArrowPointsUp = false;
      return;
    }

    if (isAtBottom) {
      this.scrollArrowPointsUp = true;
    }
  }

  private maxScroll(element: HTMLElement): number {
    return Math.max(0, element.scrollHeight - element.clientHeight);
  }

  private fadeThreshold(maxScroll: number): number {
    if (maxScroll === 0) {
      return 0;
    }

    return Math.min(90, Math.max(24, maxScroll * 0.28));
  }
  
  ngOnInit() {
    this.loading = false;
  }
}
