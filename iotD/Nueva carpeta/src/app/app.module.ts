import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; // Importa el entorno

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
  AppRoutingModule,
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()), 
  provideFirebaseApp(() => initializeApp({"projectId":"iotd-e2d64","appId":"1:341146739782:web:0cef3beedc94eeed12d647","storageBucket":"iotd-e2d64.appspot.com","apiKey":"AIzaSyBBk4OwboW6RiCsuRB9Gparv7XjnbCOWOo","authDomain":"iotd-e2d64.firebaseapp.com","messagingSenderId":"341146739782","measurementId":"G-EGKPDL422V"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
