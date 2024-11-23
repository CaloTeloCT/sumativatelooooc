// src/app/Components/view/view.component.ts
import { Component, ViewChild } from '@angular/core';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { FirstBtnComponent } from '../Botones/first-btn/first-btn.component';
import { CommonModule } from '@angular/common';
import { SecondBtnComponent } from '../Botones/second-btn/second-btn.component';
import { AceptarBtnComponent } from '../Botones/aceptar-btn/aceptar-btn.component';
import { CancelarBtnComponent } from '../Botones/cancelar-btn/cancelar-btn.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';

@Component({
  selector: 'app-view',
  imports: [VisualizadorComponent, FirstBtnComponent, CommonModule, SecondBtnComponent, AceptarBtnComponent, CancelarBtnComponent, EmailComponent, PasswordComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al VisualizadorComponent
  showVisualizer = false;
  email: string = '';
  password: string = ''; // Añadir propiedad para almacenar la contraseña
  passwordStrength: string = ''; // Añadir propiedad para almacenar la fuerza de la contraseña

  handleColorChange() {
    this.showVisualizer = true; // Muestra el visualizador
    this.visualizador.changeColor(); // Llama al método changeColor del Visualizador
  }

  handleShapeChange() {
    this.visualizador.toggleShape(); // Llama al método toggleShape del Visualizador
  }

  handleAccepted() {
    this.visualizador.showMessage('Aceptado con éxito'); // Muestra el mensaje en el Visualizador
  }

  handleCanceled() {
    this.visualizador.showMessage('Cancelado con éxito'); // Muestra el mensaje de cancelación en el Visualizador
  }

  handleEmailChange(email: string) {
    this.visualizador.displayEmail(email); // Llama al método displayEmail del Visualizador
  }

  // Método para manejar el cambio de contraseña
  handlePasswordChange(password: string) {
    this.password = password;
    // Si tienes un visualizador, puedes actualizar su contenido aquí
    if (this.visualizador) {
      this.visualizador.displayPassword(password);
    }
  }

  // Método para manejar el cambio de fuerza de contraseña
  handlePasswordStrengthChange(strength: string) {
    this.passwordStrength = strength;
    // Si tienes un visualizador, puedes actualizar su contenido aquí
    if (this.visualizador) {
      this.visualizador.displayPasswordStrength(strength);
    }
  }
}  
