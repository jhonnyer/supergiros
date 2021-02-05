import { Component, OnInit, HostBinding } from '@angular/core';
import { from } from 'rxjs';
// Importar modelo 
import {Articulo} from 'src/app/models/Articulo';
// importar servicio API 
import {ArticulosService} from '../../services/articulos.service';
// Importar router para enrutar a otras vistas 
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-form-articulos',
  templateUrl: './form-articulos.component.html',
  styleUrls: ['./form-articulos.component.css']
})
export class FormArticulosComponent implements OnInit {

   // Guarda el div principal en un row 
   @HostBinding('class') classes='row';
   // Importo el modelo 
   articulo:Articulo={
    id_articulo:0,
    nombre:'',
    AF:0,
    serie:'',
    imagen:'',
    stock:0,
    id_cat1:0,
    // id_estado1:0,
    id_persona2:0,
    id_pdv1:0
   };
 
 
   // formulario de validacion de datos si un juego esta creado para editar 
   // si el edit esta en falso, se puede guardar, si esta en true se edita. ya esta creado
   edit: boolean=false;
   
   constructor(private articuloService: ArticulosService, private router: Router, private activatedRoute: ActivatedRoute) { }
 
   ngOnInit(){
     // recupera el id del juego a actualizar 
     const params = this.activatedRoute.snapshot.params;
     console.log(params)
     if (params.id){
       this.articuloService.getArticulo(params.id)
       .subscribe(
         res=>{
           console.log(res);
           this.articulo=res;
           this.edit=true;
         },
         err=>console.error(err)
       )
     }
   }
 
   saveNewArticulo(){
     // console.log(this.game);
     // Elimina los datos de creacion en el formulario porque la base de datos los crea automaticamente 
     delete this.articulo.id_articulo;
    //  delete this.game.id;
     this.articuloService.saveArticulo(this.articulo)
     .subscribe(
       res=>{
         console.log(res);
         console.log(this.articulo);
         // Cuando guarde un juego envia a la vista games
         this.router.navigate(['/articulos']);
       },
       err=>console.error(err)
     );
   }
 
   // updateGame(){
   //   // verificar objeto a actualizar 
   //   console.log(this.game);
   //   // la fecha de creación no se actualiza 
   //   delete this.game.created_at;
   //   this.gameService.updateGame(this.game.id, this.game)
   //   .subscribe(
   //     res=>{
   //       console.log(res);
   //       // console.log(this.edit);
   //       this.router.navigate(['/games']);
   //     },
   //     err=>console.log(err)
   //   )
   // }
 
 }
 
