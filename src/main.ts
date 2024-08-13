import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Asegúrate de que esta ruta es correcta
import { appConfig } from './app/app.config'; // Y esta también

enableProdMode();


bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
