import { getConnection, sql, querys } from "../database"
import { config } from "dotenv";
const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();
app.use(express.json());

config();

//Login 
export const login = async (req, res) => {
    var loginName = req.body.user;// Guardamos los datos en variable  
    var pasword = req.body.password;
   
    if (loginName == null || pasword == null) {// Validaciones basicas
        console.log("Error datos invalidos")
        return res.status(400).json({ msg: 'Bat Request' });
    }//Validar

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('username', sql.NVarChar(35), loginName)
            .input('contraseña', sql.NVarChar(35), pasword)
            .query(querys.login); // Create procedure login
        const user = {
            username: loginName,
            password: pasword
        };

        if (result.recordset[0] != null) {
            const accessToken = generateAccessToken(user);
            const sms = "authorization"
            const dataUser = {
                sms: sms,
                accessToken: accessToken,
                user: user
            };
            console.log("USUARIO:", { dataUser });
            res.send(JSON.stringify({ dataUser }))
        } else {
            const dataUser = {
                sms: "Incorrect username or password!",
                accessToken: "null",
                user: user
            };
            console.log("Usuario o contraseña incorrectos!")
            res.send(JSON.stringify({ dataUser }))
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

};

//Generate Token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_KEY, { expiresIn: '1h' });
}

//Validate Token
export const validateToken = (req, res, next) => {
    const accessToken = req.get('Authorization')
    if (!accessToken) res.send('Access denied');

    console.log(accessToken)
    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if (err) {
            res.send('Accces denied');
            console.log("Invalido")
        } else {
            next();
        }
    });

}