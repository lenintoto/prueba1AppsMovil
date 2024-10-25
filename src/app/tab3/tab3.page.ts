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
  constructor(public navCtrl: NavController) {
  }
  calcular(){
    var ini = moment(this.fechaini);
    var fin = moment(this.fechafin);
    var diff = fin.diff(ini,'days');
    console.log(diff)
  }
}
