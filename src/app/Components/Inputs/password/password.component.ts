// src/app/Components/Inputs/password/password.component.ts
import { CommonModule, NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  password: string = '';
  passwordStrength: string = '';

  @Output() passwordChange = new EventEmitter<string>();
  @Output() passwordStrengthChange = new EventEmitter<string>();

  onPasswordInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    this.password = value;
    this.passwordStrength = this.evaluatePasswordStrength(value);

    this.passwordChange.emit(this.password);
    this.passwordStrengthChange.emit(this.passwordStrength);
  }

  evaluatePasswordStrength(password: string): string {
    if (password.length < 6) {
      return 'Muy débil';
    } else if (password.length < 8) {
      return 'Débil';
    } else if (password.length < 10) {
      return 'Moderada';
    } else {
      return 'Fuerte';
    }
  }
}
