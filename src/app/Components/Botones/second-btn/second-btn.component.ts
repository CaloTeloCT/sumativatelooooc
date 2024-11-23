// src/app/Components/Botones/second-btn/second-btn.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-btn',
  imports: [],
  templateUrl: './second-btn.component.html',
  styleUrl: './second-btn.component.css'
})
export class SecondBtnComponent {
  @Output() shapeChange = new EventEmitter<void>();

  onClick() {
    this.shapeChange.emit(); // Emitir el evento al hacer clic
  }
}
