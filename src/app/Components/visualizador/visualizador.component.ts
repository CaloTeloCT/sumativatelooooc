// src/app/Components/visualizador/visualizador.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-visualizador',
  imports: [CommonModule],
  templateUrl: './visualizador.component.html',
  styleUrl: './visualizador.component.css'
})
export class VisualizadorComponent {
  currentColor: string = this.getRandomColor(); // Inicializa el color con un color aleatorio
  isCircle: boolean = false; // Propiedad para determinar si es un círculo
  message: string = ''; // Mensaje a mostrar



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

  // Método para alternar entre cuadrado y círculo
  toggleShape() {
    this.isCircle = !this.isCircle; // Cambia la forma
  }

  // Método para mostrar un mensaje
  showMessage(msg: string) {
    this.message = msg; // Actualiza el mensaje
  }
}
