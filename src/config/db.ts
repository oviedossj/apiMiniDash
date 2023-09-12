import { Sequelize } from 'sequelize';
import config from "../config/config"; 

// postman render
const sequelize = new Sequelize(config.dbUrl, {
  dialect: 'postgres', 
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
//MariaDB SrWeb
// const sequelize = new Sequelize(config.dbUrlMarias, {
//     dialect: 'mariadb', 
//     logging: false,
//     dialectOptions: {
//       // ssl: {
//       //   require: true,
//       //   rejectUnauthorized: false,
//       // },
//     },
//   });
  
  export const auth = async () => {
    try {
      await sequelize.authenticate();
      // await sequelize.sync()
      console.log('Conectado a la DB.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  export default sequelize;
  