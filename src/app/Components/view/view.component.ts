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
import { TextComponent } from '../Inputs/text/text.component';

@Component({
  selector: 'app-view',
  imports: [VisualizadorComponent, FirstBtnComponent, CommonModule, SecondBtnComponent, AceptarBtnComponent, CancelarBtnComponent, EmailComponent, PasswordComponent, TextComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al VisualizadorComponent
  showVisualizer = false;
  email: string = '';
  password: string = ''; // Añadir propiedad para almacenar la contraseña
  text: string = '';

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

  handlePasswordChange(password: string) {
    this.visualizador.displayPassword(password); // Llama al método displayPassword del Visualizador
  }

  handleTextChange(text: string) {
    this.visualizador.displayText(text); // Llama al método displayText del Visualizador
  }
}  
