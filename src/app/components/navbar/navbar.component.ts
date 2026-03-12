import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isOpen = false;

  navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollTo(section: string) {

    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });

    this.isOpen = false;

  }

}