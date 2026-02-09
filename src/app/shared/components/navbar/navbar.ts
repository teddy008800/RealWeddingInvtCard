import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() openSection = new EventEmitter<string>();

  open(id: string) {
    this.openSection.emit(id);
  }
}
