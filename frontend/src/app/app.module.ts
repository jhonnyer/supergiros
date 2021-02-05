import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar modulo HTTP 
import { HttpClientModule } from '@angular/common/http';
//Guardar datos de formulario 
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { PdvComponent } from './components/pdv/pdv.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import {ArticulosService} from './services/articulos.service';
import { from } from 'rxjs';
import { FormArticulosComponent } from './components/form-articulos/form-articulos.component';
import { EditArticulosComponent } from './components/edit-articulos/edit-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    PdvComponent,
    NavegacionComponent,
    FormArticulosComponent,
    EditArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
