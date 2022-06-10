
export const querys ={
    
    //Login
    login: "EXEC PA_LOGIN @username,@contraseña",

    //Department
    getAllDepartment:  "EXEC pa_listar_departremanetos",
    getDepartmentID: "EXEC pa_listar_departremanetos_id @idDepartamento",
    addDepartment: "EXEC pa_nuevo_departamento @descripcion, @idDistrito, @idPais",
    updateDepartment: "EXEC pa_eliminar_departamento @idDepartamento",
    deleteDepartment: "EXEC pa_actualizar_departamento @idDepartamento, @descripcion, @idDistrito, @idPais",

    //Location
    getAllCountrys: "EXEC pa_listar_paises",
    getAllDistricts: "EXEC pa_listar_distritos",
    getAllProvinces: "EXEC pa_listar_provincias",

    //USER
    getALLUser: "EXEC listar_usuarios",
    getUserID: "EXEC listar_usuarios_cedula @cedula",
    updateUser: "EXEC actualizar_usuarios ",
    deleteUser: "eliminar_usuarios",
    getSex: "EXEC listar_sexos",

}