// src/app/Components/visualizador/visualizador.component.ts
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-visualizador',
  imports: [],
  templateUrl: './visualizador.component.html',
  styleUrl: './visualizador.component.css'
})
export class VisualizadorComponent {
  currentColor: string = this.getRandomColor(); // Inicializa el color con un color aleatorio

  // Método para cambiar el color
  changeColor() {
    this.currentColor = this.getRandomColor();
  }

  // Método para generar un color RGB aleatorio
  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
