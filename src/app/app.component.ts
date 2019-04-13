import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resultado:number = 0;
  estaAutenticado:boolean = false;

  obtenerNumero(numero: number) {
    if (this.resultado === 0) {
      this.resultado = numero;
    } else {
      this.resultado = Number(String(this.resultado) + String(numero));
    }
  }
  obtenerOperador(operador: string) {
    this.resultado = 0;
  }
  limpiar() {
    this.resultado = 0;
  }
  obtenerResultado() {
    this.resultado = 0;
  }
  autenticar(){
    this.estaAutenticado = !this.estaAutenticado;
  }
}
