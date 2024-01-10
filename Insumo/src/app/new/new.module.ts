import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ]
})
export class NewModule { }
