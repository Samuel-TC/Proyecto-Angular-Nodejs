import { MAX } from "mssql";
import { getConnection, sql, querys } from "../database"

//GET all user
export const getUsers = async (req, res) => {

    const { cedula } = req.params
    const Pag =cedula;
    console.log(cedula);
    const tamPag=8

    try {
        const pool = await getConnection(); // Promise connection
        const result = await pool.request()
        .input('Pag', Pag)
        .input('tamPag', tamPag)// Create Procedure
        .query(querys.getALLUser)
        
        res.json(result.recordset);
        console.log(result.recordset) 
   } catch (error) {
       res.send(error.message)
   }
};

//GET user by ID
export const getUserByID = async (req, res) => {

    const { cedula } = req.params
   
    const pool = await getConnection();
    const result= await pool.request()
        .input('cedula', cedula)
        .query(querys.getUserID);
        console.log(cedula)
    res.send(result.recordset[0])
};

//GET user by ID
export const getUserByIDFoto = async (req, res) => {

    const { idUsuario } = req.params
   console.log(idUsuario)
    const pool = await getConnection();
    const result= await pool.request()
        .input('idUsuario', idUsuario)
        .query(querys.getUserFoto);
        console.log(result.recordset[0])
    res.send(result.recordset[0])
};

//DELETE user by ID
export const deleteUserById = async (req, res) => {

    const { cedula } = req.params

    const pool = await getConnection();
    const result= await pool.request()
        .input('cedula', cedula)
        .query(querys.deleteUser);
    res.send(result)
};

//UPDATE user by ID
export const updateUserById = async (req, res) => {
    
    const { cedula, nombre, apellido1, apellido2, correo, fechaNacimiento, idSexo, celular, idDepartamento, idDistrito,foto }= req.body;// save data 
    
 
    try {
        
        const pool = await getConnection();
        await pool.request()
            .input('cedula', sql.NVarChar(9), cedula)
            .input("nombre", sql.NVarChar(30), nombre)
            .input("apellido1", sql.NVarChar(26), apellido1)
            .input("apellido2", sql.NVarChar(26), apellido2)
            .input("correo", sql.NVarChar(35), correo)
            .input("fechaNacimiento", sql.Date, fechaNacimiento)
            .input("idSexo", sql.Bit, idSexo)
            .input('celular', sql.NVarChar(15), celular)
            .input('idDepartamento', sql.TinyInt, idDepartamento)
            .input('idDistrito', sql.SmallInt, idDistrito)
            .input("foto", sql.NVarChar(MAX), foto)
            .query(querys.updateUser); // Create procedure
        res.json({  idDepartamento, descripcion, idDistrito, idPais });
  } catch (error) {
    res.send(error.message)
  }
};

//GET all sex
export const getSexs = async (req, res) => {

    try {
        const pool = await getConnection(); // Promise connection
        const result = await pool.request().query(querys.getSex);// Create Procedure
        res.json(result.recordset);
        console.log("List Request") 
   } catch (error) {
       res.send(error.message)
   }
};