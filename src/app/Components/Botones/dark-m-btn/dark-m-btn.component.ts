// src/app/Components/Botones/dark-m-btn/dark-m-btn.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dark-m-btn',
  imports: [],
  templateUrl: './dark-m-btn.component.html',
  styleUrl: './dark-m-btn.component.css'
})
export class DarkMBtnComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();

  onClick() {
    this.toggleDarkMode.emit(); // Emitir el evento al hacer clic
  }
}
