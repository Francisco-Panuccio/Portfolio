import { Injectable, computed, signal } from '@angular/core';
import { Language, MESSAGES } from '../data/messages.data';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private readonly storageKey = 'portfolio-language';
  private readonly currentLanguage = signal<Language>(this.getStoredLanguage());
  private readonly transitionState = signal<'idle' | 'out' | 'in'>('idle');
  private transitionTimeouts: ReturnType<typeof setTimeout>[] = [];

  readonly language = computed(() => this.currentLanguage());
  readonly texts = computed(() => MESSAGES[this.currentLanguage()]);
  readonly languageTransitionState = computed(() => this.transitionState());
  readonly languageTransitioning = computed(() => this.transitionState() !== 'idle');

  toggleLanguage(): void {
    if (this.languageTransitioning()) {
      return;
    }

    this.clearTransitionTimeouts();
    this.transitionState.set('out');

    this.transitionTimeouts.push(setTimeout(() => {
      this.applyNextLanguage();
      this.transitionState.set('in');
    }, 170));

    this.transitionTimeouts.push(setTimeout(() => {
      this.transitionState.set('idle');
      this.clearTransitionTimeouts();
    }, 420));
  }

  private applyNextLanguage(): void {
    const nextLanguage = this.currentLanguage() === 'es' ? 'en' : 'es';
    this.currentLanguage.set(nextLanguage);
    this.storeLanguage(nextLanguage);
  }

  private clearTransitionTimeouts(): void {
    this.transitionTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.transitionTimeouts = [];
  }

  private getStoredLanguage(): Language {
    if (typeof localStorage === 'undefined') {
      return 'es';
    }

    const storedLanguage = localStorage.getItem(this.storageKey);
    return storedLanguage === 'en' || storedLanguage === 'es' ? storedLanguage : 'es';
  }

  private storeLanguage(language: Language): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(this.storageKey, language);
  }
}
