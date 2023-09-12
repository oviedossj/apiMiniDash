import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import { IClienteAttributes } from 'src/interfaces/clienteInterface';

class Cliente extends Model<IClienteAttributes> implements IClienteAttributes{
  public id_cliente!: number;
  public activo!: boolean;
  public contrato!: string;
  public días_front!: number;
  public eliminado!: boolean;
  public email!: string;
  public fecha_alta!: Date;
  public fecha_baja!: Date;
  public nombre!: string;
  public numero_telefono!: string;
  public pais!: string;
  public plan!: string;

}

Cliente.init(
    {
        id_cliente: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
          },
          activo: {
            type: DataTypes.BOOLEAN,
          },
          contrato: {
            type: DataTypes.STRING,
          },
          días_front: {
            type: DataTypes.BIGINT,
          },
          eliminado: {
            type: DataTypes.BOOLEAN,
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
          },
          fecha_alta: {
            type: DataTypes.DATE,
          },
          fecha_baja: {
            type: DataTypes.DATE,
          },
          nombre: {
            type: DataTypes.STRING,
          },
          numero_telefono: {
            type: DataTypes.STRING,
          },
          pais: {
            type: DataTypes.STRING,
          },
          plan: {
            type: DataTypes.STRING,
          },
    },
    {
      sequelize,
      tableName: 'clientes',
      timestamps: false,
      underscored: true,
    }
  );

export default Cliente;
