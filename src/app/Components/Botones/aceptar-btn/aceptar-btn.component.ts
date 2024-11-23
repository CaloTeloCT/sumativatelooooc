// src/app/Components/Botones/aceptar-btn/aceptar-btn.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aceptar-btn',
  imports: [],
  templateUrl: './aceptar-btn.component.html',
  styleUrl: './aceptar-btn.component.css'
})
export class AceptarBtnComponent {
  @Output() accepted = new EventEmitter<void>();

  onClick() {
    this.accepted.emit(); // Emitir el evento al hacer clic
  }
}
