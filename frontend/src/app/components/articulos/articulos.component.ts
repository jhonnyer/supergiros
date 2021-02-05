import { Component, HostBinding, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ArticulosService} from '../../services/articulos.service';
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  @HostBinding('class') classes="row";
  articulos:any=[];
  constructor(private articulosService:ArticulosService, private router: Router) { }


  ngOnInit(): void {
    this.getArticulos();
  }
  getArticulos(){
    this.articulosService.getArticulos().subscribe(
      res=>{
        this.articulos=res,
        res=>console.log(res)
      },
        err=>console.error(err)
    );
  }

  deleteArticulo(id: string){
    // console.log(id);
    this.articulosService.deleteArticulo(id).subscribe(
      res=>{
        console.log(res);
        this.getArticulos();
        this.router.navigate(['/articulos']);
      },
      err=>console.log(err)
    )
  }
  // Probar si esta recuperando el id 
  // editGame(id:string){
  //   console.log(id);
  // }
}
