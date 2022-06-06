import sql from 'mssql'
import {config} from 'dotenv';

config();

//Habilitamos el TCP/IP SQL servere Configuration Manager
//Configuracion del servidor sql
const dbSettings ={

    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

// Conectarse a la base de tados retornando una coneccion
export async function getConnection(){
    
    try {
        const pool = await sql.connect(dbSettings);
        console.log("Conectado al servidor!", dbSettings.server);
        return pool;
    } catch (error) {
        console.error("Error al conectarse al servidor", error);
    }
}

export {sql};