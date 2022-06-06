import {config} from 'dotenv';

config();
console.log(process.env.PORT);

//Puerto optenido de las variables de entorno
export default{
    port: process.env.PORT  || 3000
}