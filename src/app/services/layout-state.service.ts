import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {
  private readonly aboutSkillsExpandedState = signal(false);

  readonly aboutSkillsExpanded = computed(() => this.aboutSkillsExpandedState());

  setAboutSkillsExpanded(expanded: boolean): void {
    this.aboutSkillsExpandedState.set(expanded);
  }
}
