import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  textInput: string = '';

  constructor() {}

  saveText() {
    const blob = new Blob([this.textInput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    window.open(url);

    URL.revokeObjectURL(url);
  }
}
