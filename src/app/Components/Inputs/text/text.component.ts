import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text',
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  text: string = ''; // Variable para almacenar el texto ingresado

  onTextChange(value: string) {
    this.text = value; // Actualiza la variable con el texto ingresado
  }
}
