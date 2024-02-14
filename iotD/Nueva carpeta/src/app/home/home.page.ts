import { Component } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  

rutaTabla:any;
ledStatus:boolean=false;

    rutaTabla2:any;
    ledStatus2:boolean=false;

       rutaTabla3:any;
       ledStatus3:boolean=false; 
           
           rutaTabla4:any;
           ledStatus4:boolean=false;

constructor(private db:Firestore) { } 
















  async apagar() 
{
this.rutaTabla = doc(this.db,'Led','LED1');//RUTA DE TABLA EN LA BD
await setDoc(this.rutaTabla, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
}


async encender() 
{
this.rutaTabla = doc(this.db,'Led','LED1');//RUTA DE TABLA EN LA BD
await setDoc(this.rutaTabla, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async toogleState()
{
this.ledStatus=(!this.ledStatus);
this.rutaTabla=doc(this.db, 'Led', 'LED1');
await setDoc(this.rutaTabla, { encender: this.ledStatus });//CAMBIA EL ATRIBUTO DE LA TABLA
console.log(this.ledStatus)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async toogleState2()
{
  this.ledStatus2=(!this.ledStatus2);
  this.rutaTabla2=doc(this.db, 'Led', 'LED2');
  await setDoc(this.rutaTabla2, { encender: this.ledStatus2 }); //CAMBIA EL ATRIBUTO DE LA TABLA
  console.log(this.ledStatus2)

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async toogleState3()
{
  this.ledStatus3=(!this.ledStatus3);
  this.rutaTabla3=doc(this.db, 'Led', 'LED3');
  await setDoc(this.rutaTabla3, { encender: this.ledStatus3 }); //CAMBIA EL ATRIBUTO DE LA TABLA
  console.log(this.ledStatus3)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async toogleState4()
{
  this.ledStatus4=(!this.ledStatus4);
  this.rutaTabla4=doc(this.db, 'Led', 'LED4');


  // Obtener el estado actual de los otros LEDs
  const led1State = await this.getLEDState('LED1');
  const led2State = await this.getLEDState('LED2');
  const led3State = await this.getLEDState('LED3');

  // Cambiar el estado de todos los LEDs al mismo tiempo
  await setDoc(this.rutaTabla4, { LED1: this.ledStatus4, LED2: this.ledStatus4, LED3: this.ledStatus4 });

  // Cambiar el estado individual de cada LED si estaba encendido anteriormente
  if (led1State) await setDoc(this.rutaTabla, { 'encender': this.ledStatus4 });
    if (led2State) await setDoc(this.rutaTabla2, { 'encender': this.ledStatus4 });
    if (led3State) await setDoc(this.rutaTabla3, { 'encender': this.ledStatus4 });

  console.log(this.ledStatus4);
}


async getLEDState(ledId: string): Promise<boolean> {
  const rutaTabla = doc(this.db, 'Led', ledId);
  const docSnap = await getDoc(rutaTabla);
  return docSnap.exists() ? docSnap.data()['encender'] : false;
}

}