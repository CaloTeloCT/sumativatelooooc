// src/app/Components/view/view.component.ts
import { Component, ViewChild } from '@angular/core';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { FirstBtnComponent } from '../Botones/first-btn/first-btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [VisualizadorComponent, FirstBtnComponent, CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al VisualizadorComponent
  showVisualizer = false;

  handleColorChange() {
    this.showVisualizer = true; // Muestra el visualizador
    this.visualizador.changeColor(); // Llama al método changeColor del Visualizador
  }
}
