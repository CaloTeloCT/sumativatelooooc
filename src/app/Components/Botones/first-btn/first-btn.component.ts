// src/app/Components/Botones/first-btn/first-btn.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-btn',
  imports: [],
  templateUrl: './first-btn.component.html',
  styleUrl: './first-btn.component.css'
})
export class FirstBtnComponent {
  @Output() colorChange = new EventEmitter<void>();

  onClick() {
    this.colorChange.emit(); // Emitir el evento al hacer clic
  }
}
