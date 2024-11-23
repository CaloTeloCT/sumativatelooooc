// src/app/Components/Inputs/password/password.component.ts
import { CommonModule, NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  password: string = ''; // Almacena la contraseña ingresada

  @Output() passwordChange = new EventEmitter<string>(); // Evento para enviar la contraseña

  onPasswordInput(value: string) {
    this.password = value; // Actualiza la contraseña
    this.passwordChange.emit(this.password); // Emitir la contraseña cada vez que cambia
  }
}
