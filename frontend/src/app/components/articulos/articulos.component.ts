import { Component, HostBinding, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import {ArticulosService} from '../../services/articulos.service';
import {PdvService} from '../../services/pdv.service';
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';
import { Articulo } from 'src/app/models/Articulo';
import { Estado } from 'src/app/models/Estado';
import { PDV } from 'src/app/models/PDV';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  @HostBinding('class') classes="row";
  articulos:any=[];
  // pdvs:any=[];
  // estados:any=[];

  articulos$:Observable<Articulo[]>
  // pdvs$:Observable<PDV[]>
  // estados$:Observable<Estado[]>
  
  constructor(private articulosService:ArticulosService,private router: Router) { }
  // constructor(private articulosService:ArticulosService, private router: Router) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos(){
    this.articulosService.getArticulos().subscribe(
      res=>{
        this.articulos=res,
        // this.pdvs=res,
        // this.estados=res,
        console.log(this.articulos);
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
