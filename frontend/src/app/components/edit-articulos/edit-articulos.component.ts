import { Component, OnInit, HostBinding } from '@angular/core';
// Importar modelo 
import {Articulo} from 'src/app/models/Articulo';
import {PDV} from 'src/app/models/PDV';
// importar servicio API 
import {ArticulosService} from '../../services/articulos.service';
// Importar router para enrutar a otras vistas 
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-articulos',
  templateUrl: './edit-articulos.component.html',
  styleUrls: ['./edit-articulos.component.css']
})
export class EditArticulosComponent implements OnInit {

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
  
  pdv:PDV={
    id_pdv:0,
    centro_costo:'',
    cod_pdv:0,
    IP:'',
    id_person1:0
}


  // formulario de validacion de datos si un juego esta creado para editar 
  // si el edit esta en falso, se puede guardar, si esta en true se edita. ya esta creado
  // edit: boolean=false;
  
  constructor(private articulosService: ArticulosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    // recupera el id del juego a actualizar 
    const params = this.activatedRoute.snapshot.params;
    console.log(params)
    if (params.id){
      this.articulosService.getArticulo(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.articulo=res;
          // this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }

  // updateGame(){
  //   // console.log(this.game);
  //   // Elimina los datos de creacion en el formulario porque la base de datos los crea automaticamente 
  //   delete this.game.created_at;
  //   delete this.game.id;
  //   this.gameService.updateGame(this.game)
  //   .subscribe(
  //     res=>{
  //       console.log(res);
  //       console.log(this.game);
  //       // Cuando guarde un juego envia a la vista games
  //       this.router.navigate(['/games']);
  //     },
  //     err=>console.error(err)
  //   );
  // }


  updateArticulo(){
    // verificar objeto a actualizar 
    console.log(this.articulo);
    // la fecha de creación no se actualiza 
    // delete this.articulo.create_ad;
    // delete this.articulo.id_articulo;
    this.articulosService.updateArticulo(this.articulo.id_articulo, this.articulo)
    .subscribe(
      res=>{
        console.log(res);
        // console.log(this.edit);
        this.router.navigate(['/articulos']);
      },
      err=>console.log(err)
    )
  }
}
