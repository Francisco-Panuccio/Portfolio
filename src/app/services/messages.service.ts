import { Injectable, computed, signal } from '@angular/core';
import { Language, MESSAGES } from '../data/messages.data';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private readonly storageKey = 'portfolio-language';
  private readonly currentLanguage = signal<Language>(this.getStoredLanguage());

  readonly language = computed(() => this.currentLanguage());
  readonly texts = computed(() => MESSAGES[this.currentLanguage()]);

  toggleLanguage(): void {
    const nextLanguage = this.currentLanguage() === 'es' ? 'en' : 'es';
    this.currentLanguage.set(nextLanguage);
    this.storeLanguage(nextLanguage);
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
