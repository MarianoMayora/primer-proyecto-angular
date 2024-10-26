import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductosComponent} from './productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [ProductosComponent]
})
export class AppComponent {
  title = 'primer-proyecto-angular';
}
