import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class PDVController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM PDV', function (err, pdv, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(pdv);
            console.log(pdv);
        })};
        // const games=await {
        //     "Persona":
        // [  {"name": "jhonnyer",
        //         "ciudad":"Popayan"
        //     },
        //     {"Años":"20",
        //      "Departamento":"Cauca1"}
        // ]
        // };
        // res.json(games);
        // console.log(req.body);

        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM PDV WHERE id_pdv=?',[id], function(err, pdvs, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (pdvs.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(pdvs[0]);
                console.log(pdvs);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'El punto de venta no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO PDV set ?',[req.body]);
        res.json({message:'El punto de venta se añadio al inventario'});
    }
    public async delete (req:Request, res:Response): Promise<void>{
        // res.json({tex:'Eliminando un juego '+req.params.id});
        const{id}=req.params;
        await pool.query('DELETE FROM PDV where id_pdv=?',[id]);
        res.json({message:"El punto de venta no tiene equipos asignados en el inventario"});
    }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE PDV set ? where id_pdv=?',[req.body, id]);
        res.json({message:"Los articulos asignados en el punto de venta han sido actualizados"});
    }
}

const pdvController = new PDVController();
export default pdvController;