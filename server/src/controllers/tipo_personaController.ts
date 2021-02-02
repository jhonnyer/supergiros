import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class TipoPersonaController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM tipo_persona', function (err, tipo_persona, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(tipo_persona);
            console.log(tipo_persona);
        })};
      
        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM tipo_persona WHERE id_tipoper=?',[id], function(err, tipo_personas, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (tipo_personas.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(tipo_personas[0]);
                console.log(tipo_personas);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'No existe el tipo de persona'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO tipo_persona set ?',[req.body]);
        res.json({message:'El tipo de persona ha sido creado'});
    }
    // public async delete (req:Request, res:Response): Promise<void>{
    //     // res.json({tex:'Eliminando un juego '+req.params.id});
    //     const{id}=req.params;
    //     await pool.query('DELETE FROM tipo_persona where id_tipoper=?',[id]);
    //     res.json({message:"El articulo fue dado de baja del inventario"});
    // }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE tipo_persona set ? where id_tipoper=?',[req.body, id]);
        res.json({message:"Los tipos de persona han sido actualizados"});
    }
}

const tiposPersonaController = new TipoPersonaController();
export default tiposPersonaController;