import express from 'express'
import { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import clienteService from './services/clienteService';



const app = express();

// settings
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  return res.send(` si dije que no lo abrieras porque lo haces? 💥😡😡💥`);
})
app.get('/cliente', async (req, res) => {
    try {
        const Data = await clienteService.obtenerClientesActivos()
        if (!Data) return res.status(404).json({ msg: 'data Exite' });        
        const clientesReducidos = Data.map((cliente) => {
            return {
              id_cliente: cliente.id_cliente,
              nombre: cliente.nombre,
              activo: cliente.activo,
              'días_front': cliente.días_front,
            };
          });
         res.status(200).json({msj:clientesReducidos});
    } catch (error) {
         res.status(400).json({msj:'fallo la busqueda de clientes '});
    }
    
})

// app.use(authRoutes);

export default app;