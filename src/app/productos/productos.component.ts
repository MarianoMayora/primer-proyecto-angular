import { Component } from '@angular/core';
import {CommonModule, NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';

interface Producto{
  id: number;
  nombre: string;
  precio: number;
  descuento: boolean;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule]
})



export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Manzana', precio: 100, descuento: true },
    { id: 2, nombre: 'Naranja', precio: 200, descuento: false },
    { id: 3, nombre: 'Pera', precio: 300, descuento: true }
  ];
  nuevoProducto = {
    nombre: '',
    precio: null ,
    descuento: false
  };
  agregarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio !== null) {
      const nuevoId = this.productos.length + 1; // Genera un nuevo ID
      this.productos.push({
        id: nuevoId,
        nombre: this.nuevoProducto.nombre,
        precio: this.nuevoProducto.precio,
        descuento: this.nuevoProducto.descuento
      });
      this.nuevoProducto = { nombre: '', precio: null, descuento: false }; // Reinicia el formulario
    }
  }
  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }


}
