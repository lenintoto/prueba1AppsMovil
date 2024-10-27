import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fechaini?: string;
  fechafin?: string;
  diff?: number;

  constructor(public navCtrl: NavController) {
  }
  
  calcular() {
    if (this.fechaini && this.fechafin) {
      const ini = moment(this.fechaini, 'YYYY-MM-DD');
      const fin = moment(this.fechafin, 'YYYY-MM-DD');

      this.diff = fin.diff(ini, 'days');
      console.log(`Diferencia en días: ${this.diff}`);
    } else {
      console.error('Por favor selecciona ambas fechas.');
    }
  }
}
