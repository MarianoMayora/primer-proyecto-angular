import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppComponent } from './app.component'; // Asegúrate de que esta ruta sea correcta
import { ProductosComponent } from './productos/productos.component';
import {CommonModule} from '@angular/common'; // Asegúrate de que esta ruta sea correcta


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule // Agrega FormsModule aquí para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
