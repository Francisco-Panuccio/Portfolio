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

  ngOnInit() {
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.layoutStateService.setAboutSkillsExpanded(false);
  }
}
