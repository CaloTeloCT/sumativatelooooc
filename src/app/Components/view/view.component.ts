import { Component } from '@angular/core';
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
  showVisualizer = false;

  onColorChange() {
    this.showVisualizer = true;
  }
}
