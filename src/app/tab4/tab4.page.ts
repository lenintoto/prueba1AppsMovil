import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  A?: number;
  B?: number;
  C?: number;
  X1?: number | string;
  X2?: number | string;

  constructor() {}

  calcularEcuacionCuadratica() {
    if (!this.A || !this.B || !this.C) {
      alert('Por favor, ingresa todos los coeficientes (A, B, C).');
      return;
    }

    const discriminante = Math.pow(this.B, 2) - 4 * this.A * this.C;

    if (discriminante < 0) {
      this.X1 = 'No hay soluciones reales';
      this.X2 = 'No hay soluciones reales';
    } else {
      this.X1 = ((-this.B + Math.sqrt(discriminante)) / (2 * this.A)).toFixed(2);
      this.X2 = ((-this.B - Math.sqrt(discriminante)) / (2 * this.A)).toFixed(2);
    }
  }
}
