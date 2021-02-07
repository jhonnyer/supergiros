import { Timestamp } from "rxjs";

export interface Estado{
    // simbolo ? significa que el dato no es requerido 
    id_estado?: number;
    estado?: string;
    fecha_hora?:Date
}
