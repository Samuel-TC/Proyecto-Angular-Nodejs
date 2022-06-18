import { MAX } from "mssql";
import { getConnection, sql, querys } from "../database"

// GET all Request
export const getRequest = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection

        const result = await pool.request()
                        .query(querys.getALLRequest);// Create Procedure
        res.json(result.recordset);
        console.log("List Request"); 

   } catch (error) {
       res.send(error.message);
   }
};

//GET Request by ID
export const getRequestByID = async (req, res) => {

    const { idSolicitud } = req.params

    console.log(idSolicitud)
    const pool = await getConnection();

    const result= await pool.request()
        .input('idSolicitud', idSolicitud)
        .query(querys.getRequestID);
    console.log(result.recordset[0])
    res.send(result.recordset[0]);
    
};

//GET Request by ID
export const getRequestByIDUser = async (req, res) => {

    const { idUsuario } = req.params

    const pool = await getConnection();

    const result= await pool.request()
        .input('idUsuario', idUsuario)
        .query(querys.getRequestIDUser);
        
    res.json(result.recordset);
    
};

//ADD new Request
export const createRequest = async (req, res) => {

    var {  idUsuario ,palabraClave ,asuntoDetallado  ,idClasificador, 
            idRespuesta ,detalleRespuesta  ,idUsuarioRespuesta, 
            cantidadArchivos }= req.body;// save data 
          
            detalleRespuesta="nada";
       
            console.log( idUsuario ,palabraClave ,asuntoDetallado  ,Number.parseInt(idClasificador), 
                idRespuesta ,detalleRespuesta  ,idUsuarioRespuesta, cantidadArchivos);
    try {
        const pool = await getConnection();

        await pool.request()
            .input("idUsuario", sql.Int, idUsuario)
            .input("palabraClave", sql.NVarChar(25), palabraClave)
            .input("asuntoDetallado", sql.NVarChar(50), asuntoDetallado)
            .input("idClasificador", sql.TinyInt, Number.parseInt(idClasificador))
            .input('idRespuesta', sql.TinyInt, idRespuesta)
            .input('detalleRespuesta', sql.NVarChar(50), detalleRespuesta)
            .input('idUsuarioRespuesta', sql.Int, idUsuarioRespuesta)
            .input('cantidadArchivos', sql.Int, cantidadArchivos)
            .query(querys.createRequest); // Create procedure

       

  } catch (error) {
    res.send(error.message);
    
  }
};

//DELETE Request by ID
export const deleteRequestById = async (req, res) => {
    const { idSolicitud } = req.params

    const pool = await getConnection();

    const result= await pool.request()
        .input('idSolicitud', idSolicitud)
        .query(querys.deleteRequest);

    res.send(result);
};

//UPDATE Request by ID
export const updateRequestById = async (req, res) => {

    var {  idUsuario ,palabraClave ,asuntoDetallado  ,idClasificador, 
           idRespuesta ,detalleRespuesta  ,idUsuarioRespuesta, cantidadArchivos }= req.body;// save data 

    let { idSolicitud } =  req.params
    console.log(idSolicitud);

    detalleRespuesta="nada";
  

    try {
        
        const pool = await getConnection();

        await pool.request()
            .input("idSolicitud", sql.Int, idSolicitud)
            .input("idUsuario", sql.Int, idUsuario)
            .input("palabraClave", sql.NVarChar(25), palabraClave)
            .input("asuntoDetallado", sql.NVarChar(50), asuntoDetallado)
            .input("idClasificador", sql.TinyInt, idClasificador)
            .input('idRespuesta', sql.TinyInt, idRespuesta)
            .input('detalleRespuesta', sql.NVarChar(50), detalleRespuesta)
            .input('idUsuarioRespuesta', sql.Int, idUsuarioRespuesta)
            .input('cantidadArchivos', sql.Int, cantidadArchivos)
            .query(querys.updateRequestID); // Create procedure

        res.json({  palabraClave ,asuntoDetallado ,idClasificador, 
                idRespuesta ,detalleRespuesta  ,idUsuarioRespuesta, cantidadArchivos });

  } catch (error) {
    res.send(error.message);
  }
};

// GET all Clasificadores
export const getClasificadores = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection

        const result = await pool.request().query(querys.getAllClasificator);// Create Procedure
        res.json(result.recordset);

        console.log("List Request");

   } catch (error) {
       res.send(error.message);
   }
};

//DELETE FILE by ID
export const deleteFileById = async (req, res) => {
    const { idArchivo } = req.params

    const pool = await getConnection();

    const result= await pool.request()
        .input('idArchivo', idArchivo)
        .query(querys.deleteFilebyID);

    res.send(result);
};

//GET File by IDSolicitud
export const getFileByIDSolicitud = async (req, res) => {

    const { idSolicitud } = req.params

    const pool = await getConnection();

    const result= await pool.request()
        .input('idSolicitud', idSolicitud)
        .query(querys.getFileIDSolicitud);
    res.send(result.recordset);
    
};

//GET File by IDSolicitud
export const createFile = async (req, res) => {

    var {  idSolicitud, linea, archivo, comentario  }= req.body;// save data 

    const pool = await getConnection();

    console.log(idSolicitud);
    
    await pool.request()
        .input('idSolicitud', sql.Int ,Number.parseInt(idSolicitud))
        .input('linea', sql.NVarChar(25) ,linea)
        .input('archivo', sql.NVarChar(MAX) ,archivo)
        .input('comentario', sql.NVarChar(70) ,comentario)
        .query(querys.createFile);
    
};