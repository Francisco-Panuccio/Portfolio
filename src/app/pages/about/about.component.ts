import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';
import { MessagesService } from '../../services/messages.service';
import { LayoutStateService } from '../../services/layout-state.service';

@Component({
  selector: 'app-about',
  imports: [LoadingComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnDestroy {
  loading: boolean = true;
  skillsExpanded: boolean = false;
  private closeSkillsTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    public readonly messagesService: MessagesService,
    private readonly layoutStateService: LayoutStateService
  ) { }

  get cvUrl(): string {
    return this.messagesService.language() === 'en'
      ? 'data/Francisco Panuccio CV eng.pdf'
      : 'data/Francisco Panuccio CV.pdf';
  }

  toggleSkills(): void {
    this.skillsExpanded = !this.skillsExpanded;
    this.layoutStateService.setAboutSkillsExpanded(this.skillsExpanded);

    if (this.skillsExpanded) {
      this.scrollToSkillsBottom();
    }
  }

  private scrollToSkillsBottom(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const skillsContent = document.getElementById('skills-content');
        const scrollingElement = document.scrollingElement ?? document.documentElement;

        skillsContent?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        scrollingElement.scrollTo({
          top: scrollingElement.scrollHeight,
          behavior: 'smooth'
        });
      });
    });
  }

  scrollToTop(): void {
    const scrollingElement = document.scrollingElement ?? document.documentElement;

    window.clearTimeout(this.closeSkillsTimeout);
    scrollingElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    this.closeSkillsTimeout = setTimeout(() => {
      this.skillsExpanded = false;
      this.layoutStateService.setAboutSkillsExpanded(false);
    }, 520);
  }

  ngOnInit() {
    this.loading = false;
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.closeSkillsTimeout);
    this.layoutStateService.setAboutSkillsExpanded(false);
  }
}
