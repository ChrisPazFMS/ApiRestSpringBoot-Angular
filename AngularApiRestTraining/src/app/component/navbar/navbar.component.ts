import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  /**
   * Gestion de changement d'état pour la connexion.
   * true = logo Login & false = logo Logout.
   */
  isLoggedIn: boolean = false;

  constructor() {}

  login() {
    // Logique de connexion
    this.isLoggedIn = true;
  }

  logout() {
    // Logique de déconnexion
    this.isLoggedIn = false;
  }
}
