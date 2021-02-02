import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class EstadoController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM estado', function (err, est, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(est);
            console.log(est);
        })};

        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM estado WHERE id_estado=?',[id], function(err, ests, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (ests.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(ests[0]);
                console.log(ests);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'El estado no existe'});            
        })};
}

const estadosController = new EstadoController();
export default estadosController;