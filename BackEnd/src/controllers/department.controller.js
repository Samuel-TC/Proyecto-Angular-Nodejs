import { MAX } from "mssql";
import { getConnection, sql, querys } from "../database"

// GET all department
export const getDepartments = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection
        const result = await pool.request().query(querys.getAllDepartment);// Create Procedure
        res.json(result.recordset);
        console.log("List Request") 
   } catch (error) {
       res.send(error.message)
   }
};

//GET department by ID
export const getDepartmentsByID = async (req, res) => {
    const { idDepartamento } = req.params

    const pool = await getConnection();
    const result= await pool.request()
        .input('idDepartamento', idDepartamento)
        .query(querys.getDepartmentID);
    res.send(result.recordset[0])
    
};

//ADD new department
export const createDepartment = async (req, res) => {

    const { descripcion, idDistrito, idPais }= req.body;// save data 

    try {
        const pool = await getConnection();
        await pool.request()
            .input("descripcion", sql.NVarChar(50), descripcion)
            .input('idDistrito', sql.SmallInt, idDistrito)
            .input('idPais', sql.TinyInt, idPais)
            .query(querys.addDepartment); // Create procedure
        res.json({ descripcion, idDistrito, idPais  })
  } catch (error) {
    res.send(error.message+"Error de consulta")
    
  }
};

//DELETE department by ID
export const deleteDepartmentById = async (req, res) => {
    const { idDepartamento } = req.params

    const pool = await getConnection();
    const result= await pool.request()
        .input('idDepartamento', idDepartamento)
        .query(querys.deleteDepartment);
    res.send(result)
};

//UPDATE department by ID
export const updateDepartmentById = async (req, res) => {
    const { descripcion, idDistrito, idPais }= req.body;// save data 
    let { idDepartamento } =  req.params
    console.log(idDepartamento, descripcion, idDistrito, idPais);
    try {
        
        const pool = await getConnection();
        await pool.request()
            .input("idDepartamento", sql.TinyInt, idDepartamento)
            .input("descripcion", sql.NVarChar(50), descripcion)
            .input('idDistrito', sql.SmallInt, idDistrito)
            .input('idPais', sql.TinyInt, idPais)
            .query(querys.updateDepartment); // Create procedure
        res.json({  idDepartamento, descripcion, idDistrito, idPais });
  } catch (error) {
    res.send(error.message)
  }
};
