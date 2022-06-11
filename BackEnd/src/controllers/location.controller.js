import { MAX } from "mssql";
import { getConnection, sql, querys } from "../database"

// GET all Countrys
export const getCountrys = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection
        const result = await pool.request().query(querys.getAllCountrys);// Create Procedure
        res.json(result.recordset);
        console.log("List Request Countrys") 
   } catch (error) {
       res.send(error.message)
   }
};

// GET all Provinces
export const getProvinces = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection
        const result = await pool.request().query(querys.getAllProvinces);// Create Procedure
        res.json(result.recordset);
        console.log("List Request Provinces") 
   } catch (error) {
       res.send(error.message)
   }
};

// GET all Districts
export const getDistricts = async (req, res) => {
    try {
        const pool = await getConnection(); // Promise connection
        const result = await pool.request().query(querys.getAllDistricts);// Create Procedure
        res.json(result.recordset);
        console.log("List Request Districts") 
   } catch (error) {
       res.send(error.message)
   }
};