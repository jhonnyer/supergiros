import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class ArticuloFacturaController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM articulo_factura', function (err, art_fact, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(art_fact);
            console.log(art_fact);
        })};
               
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO articulo_factura set ?',[req.body]);
        res.json({message:'La factura se añadio al inventario'});
    }

}

const articulofacturaController = new ArticuloFacturaController();
export default articulofacturaController;