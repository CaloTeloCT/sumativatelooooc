import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text',
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Output() textChange = new EventEmitter<string>();

  onTextChange(event: any) {
    // Verifica si 'event' es un objeto y tiene la propiedad 'target'
    if (typeof event === 'object' && event !== null && 'target' in event) {
      // Verifica si 'event.target' existe y tiene la propiedad 'value'
      if (event.target && typeof event.target.value !== 'undefined') {
        this.textChange.emit(event.target.value);
      } else {
        // Maneja el caso donde 'event.target.value' es undefined
        console.warn('El valor del evento es indefinido en onTextChange', event);
        // Puedes emitir una cadena vacía u otro valor por defecto:
        this.textChange.emit('');
      }
    } else {
      // Maneja el caso donde 'event' no es un objeto o no tiene 'target'
      console.warn('Evento inválido en onTextChange', event);
      // Puedes emitir una cadena vacía u otro valor por defecto:
      this.textChange.emit('');
    }
  }
}
