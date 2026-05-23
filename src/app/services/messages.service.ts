import { Injectable, computed, signal } from '@angular/core';
import { Language, MESSAGES } from '../data/messages.data';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private readonly currentLanguage = signal<Language>('es');

  readonly language = computed(() => this.currentLanguage());
  readonly texts = computed(() => MESSAGES[this.currentLanguage()]);

  toggleLanguage(): void {
    this.currentLanguage.update((language) => language === 'es' ? 'en' : 'es');
  }
}
