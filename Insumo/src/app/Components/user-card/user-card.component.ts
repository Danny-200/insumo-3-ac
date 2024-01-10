import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  implements OnInit {

  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() description: string="";//parametro de descripción recibe un texto

  constructor() { }

  ngOnInit() {}

}
