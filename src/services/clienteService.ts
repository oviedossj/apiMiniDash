import Cliente from '../models/clienteModel';

class ClienteService{
    async  obtenerClientesActivos() {
        try {
          const clientesActivos = await Cliente.findAll()
        return clientesActivos
        } catch (error) {
          console.error('Error al obtener clientes activos:', error);
        }
      }
}
export default new ClienteService()