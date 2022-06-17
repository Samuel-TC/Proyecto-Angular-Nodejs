import { MAX } from "mssql";
import { getConnection, sql, querys } from "../database"

// GET all Request
export const getRequest = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection

        const result = await pool.request().query(querys.getALLRequest);// Create Procedure
        res.json(result.recordset);
        console.log("List Request"); 

   } catch (error) {
       res.send(error.message);
   }
};

//GET Request by ID
export const getRequestByID = async (req, res) => {

    const { idSolicitud } = req.params

    const pool = await getConnection();

    const result= await pool.request()
        .input('idSolicitud', idSolicitud)
        .query(querys.getRequestID);
    res.send(result.recordset[0])
    
};

//ADD new Request
export const createRequest = async (req, res) => {

    const { fechaHora ,idUsuario ,palabraClave ,asuntoDetallado ,cantidadCambios ,idClasificador, 
            idRespuesta ,detalleRespuesta ,fechaHoraRespuesta ,idUsuarioRespuesta, 
            cantidadArchivos }= req.body;// save data 

    try {
        const pool = await getConnection();

        await pool.request()
            .input("fechaHora", sql.DateTime, fechaHora)
            .input("idUsuario", sql.Int, idUsuario)
            .input("palabraClave", sql.NVarChar(25), palabraClave)
            .input("asuntoDetallado", sql.NVarChar(50), asuntoDetallado)
            .input("cantidadCambios", sql.SmallInt, cantidadCambios)
            .input("idClasificador", sql.TinyInt, idClasificador)
            .input('idRespuesta', sql.TinyInt, idRespuesta)
            .input('detalleRespuesta', sql.NVarChar(50), detalleRespuesta)
            .input('fechaHoraRespuesta', sql.DateTime, fechaHoraRespuesta)
            .input('idUsuarioRespuesta', sql.Int, idUsuarioRespuesta)
            .input('cantidadArchivos', sql.Int, cantidadArchivos)
            .query(querys.createRequest); // Create procedure

        res.json({ fechaHora ,palabraClave ,asuntoDetallado ,cantidadCambios ,idClasificador, 
            idRespuesta ,detalleRespuesta ,fechaHoraRespuesta ,idUsuarioRespuesta, 
            cantidadArchivos });

  } catch (error) {
    res.send(error.message+"Error de consulta");
    
  }
};

//DELETE Request by ID
export const deleteRequestById = async (req, res) => {
    const { idSolicitud } = req.params

    const pool = await getConnection();

    const result= await pool.request()
        .input('idSolicitud', idSolicitud)
        .query(querys.deleteRequest);

    res.send(result)
};

//UPDATE Request by ID
export const updateRequestById = async (req, res) => {

    const { fechaHora ,idUsuario ,palabraClave ,asuntoDetallado ,cantidadCambios ,idClasificador, 
           idRespuesta ,detalleRespuesta ,fechaHoraRespuesta ,idUsuarioRespuesta, 
            cantidadArchivos }= req.body;// save data 

    let { idSolicitud } =  req.params
    console.log(idSolicitud);

    try {
        
        const pool = await getConnection();

        await pool.request()
            .input("idUsuario", sql.Int, idUsuario)
            .input("fechaHora", sql.DateTime, fechaHora)
            .input("idUsuario", sql.Int, idUsuario)
            .input("palabraClave", sql.NVarChar(25), palabraClave)
            .input("asuntoDetallado", sql.NVarChar(50), asuntoDetallado)
            .input("cantidadCambios", sql.SmallInt, cantidadCambios)
            .input("idClasificador", sql.TinyInt, idClasificador)
            .input('idRespuesta', sql.TinyInt, idRespuesta)
            .input('detalleRespuesta', sql.NVarChar(50), detalleRespuesta)
            .input('fechaHoraRespuesta', sql.DateTime, fechaHoraRespuesta)
            .input('idUsuarioRespuesta', sql.Int, idUsuarioRespuesta)
            .input('cantidadArchivos', sql.Int, cantidadArchivos)
            .query(querys.updateRequestID); // Create procedure

        res.json({ fechaHora ,palabraClave ,asuntoDetallado ,cantidadCambios ,idClasificador, 
                idRespuesta ,detalleRespuesta ,fechaHoraRespuesta ,idUsuarioRespuesta, 
                cantidadArchivos });

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