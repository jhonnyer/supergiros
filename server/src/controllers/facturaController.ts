import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class FacturaController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM factura', function (err, factura, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(factura);
            console.log(factura);
        })};


        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM factura WHERE id_factura=?',[id], function(err, facturas, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (facturas.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(facturas[0]);
                console.log(facturas);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'La factura no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO factura set ?',[req.body]);
        res.json({message:'La factura fue creada'});
    }
    
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE factura set ? where id_factura=?',[req.body, id]);
        res.json({message:"Los datos de la factura fueron actualizados "});
    }
}

const facturasController = new FacturaController();
export default facturasController;