// src/app/Components/Botones/cancelar-btn/cancelar-btn.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancelar-btn',
  imports: [],
  templateUrl: './cancelar-btn.component.html',
  styleUrl: './cancelar-btn.component.css'
})
export class CancelarBtnComponent {
  @Output() canceled = new EventEmitter<void>();

  onClick() {
    this.canceled.emit(); // Emitir el evento al hacer clic
  }
}
