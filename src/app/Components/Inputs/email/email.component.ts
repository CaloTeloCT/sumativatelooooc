// src/app/Components/Inputs/email/email.component.ts
import { CommonModule, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  imports: [CommonModule, FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  email: string = ''; // Almacena el correo ingresado
  emailError: string = ''; // Almacena el mensaje de error
  emailWarning: boolean = false; // Nueva propiedad para advertencias

  @Output() emailChange = new EventEmitter<string>(); // Evento para enviar el correo

  onEmailInput(value: string) {
    this.email = value; // Actualiza el correo
    this.emailError = this.validateEmail(value); // Valida el correo
    this.emailWarning = this.emailError === 'El correo debe contener un formato válido (debe llevar @)'; // Lógica para advertencia
    this.emailChange.emit(this.email); // Emitir el correo cada vez que cambia
  }

  validateEmail(email: string): string {
    if (!email) {
      return 'El correo es obligatorio.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'El correo debe contener un formato válido (debe llevar @).';
    }
    return '';
  }
}
