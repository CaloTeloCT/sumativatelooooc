// src/app/Components/visualizador/visualizador.component.ts
import { Component } from '@angular/core';
import { FirstBtnComponent } from '../Botones/first-btn/first-btn.component';

@Component({
  selector: 'app-visualizador',
  imports: [],
  templateUrl: './visualizador.component.html',
  styleUrl: './visualizador.component.css'
})
export class VisualizadorComponent {
  currentColor: string = this.getRandomColor();

  changeColor() {
    this.currentColor = this.getRandomColor();
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
