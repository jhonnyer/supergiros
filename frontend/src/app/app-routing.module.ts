import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {FormArticulosComponent} from './components/form-articulos/form-articulos.component';
import {EditArticulosComponent} from './components/edit-articulos/edit-articulos.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/articulos',
    pathMatch:'full'
  },
  {
    path:'articulos',
    component:ArticulosComponent
  },
  {
    path:'articulos/add',
    component:FormArticulosComponent
  },
  {
    path:'articulos/edit/:id',
    component:EditArticulosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
