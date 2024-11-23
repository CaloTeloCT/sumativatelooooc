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
  email: string = ''; // Almacena el correo ingresado
  @Input() password: string = ''; // Propiedad para recibir la contraseña
  @Input() passwordStrength: string = ''; // Propiedad para recibir la fuerza de la contraseña
  text: string = ''; // Almacena el texto ingresado



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

  // Método para mostrar el correo ingresado
  displayEmail(email: string) {
    this.email = email; // Actualiza el correo
  }

  // Método para mostrar la contraseña (opcional)
  displayPassword(password: string) {
    this.password = password;
  }

  // Método para mostrar la fuerza de la contraseña (opcional)
  displayPasswordStrength(strength: string) {
    this.passwordStrength = strength;
  }

  // Método para mostrar el texto ingresado
  displayText(text: string) {
    this.text = text;
  }

}
