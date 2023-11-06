import { Component } from '@angular/core';

@Component({
  selector: 'app-font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.css']
})
export class FontResizerComponent {

    fontSize=16;

    changeFontSize(action:'increase' | 'decrease') {
      this.fontSize=action==='increase' ? this.fontSize + 2 : this.fontSize - 2;
    }
}
