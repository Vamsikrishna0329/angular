import { Component } from '@angular/core';

@Component({
  selector: 'app-app-color-changer',
  templateUrl: './app-color-changer.component.html',
  styleUrls: ['./app-color-changer.component.css']
})
export class AppColorChangerComponent {

    colorValue='';
    color='initial';

    updateColor(){
      this.color=this.colorValue;
    }
}
