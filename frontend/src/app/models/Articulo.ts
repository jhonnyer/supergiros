export interface Articulo{
    // simbolo ? significa que el dato no es requerido 
    id_articulo?: number;
    nombre?: string;
    AF?:number;
    serie?:string;
    imagen?:string;
    stock?:number;
    id_cat1?:number;
    id_estado1?:number;
    id_persona2?:number;
    id_pdv1?:number;
}
