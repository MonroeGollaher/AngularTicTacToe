import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  constructor(){
    console.log(this.value);
  }

  @Input() value: 'X' | 'O';

}
