import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  constructor(public readonly messagesService: MessagesService) { }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
