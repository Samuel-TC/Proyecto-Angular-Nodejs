
export const querys ={
    
    //Login
    login: "EXEC PA_LOGIN @username,@contraseña",

    //Department
    getAllDepartment:  "EXEC pa_listar_departremanetos",
    getDepartmentID: "EXEC pa_listar_departremanetos_id @idDepartamento",
    addDepartment: "EXEC pa_nuevo_departamento @descripcion, @idDistrito, @idPais",
    updateDepartment: "EXEC pa_actualizar_departamento @idDepartamento, @descripcion, @idDistrito, @idPais",
    deleteDepartment: "EXEC pa_eliminar_departamento @idDepartamento",

    //Location
    getAllCountrys: "EXEC pa_listar_paises",
    getAllDistricts: "EXEC pa_listar_distritos",
    getAllProvinces: "EXEC pa_listar_provincias",

    //USER
    getALLUser: "EXEC listar_usuarios_2 @Pag, @tamPag",
    getUserID: "EXEC listar_usuarios_cedula @cedula",
    updateUser: "EXEC actualizar_usuarios @cedula ,@nombre ,@apellido1 ,@apellido2 ,@correo ,@fechaNacimiento,@idSexo ,@celular ,@idDepartamento ,@idDistrito",
    deleteUser: "eliminar_usuarios @cedula",
    getSex: "EXEC listar_sexos",

    //REQUEST
    getALLRequest: "EXEC pa_listra_solicitudes",
    getRequestID: "pa_buscar_solicitud_id @idSolicitud",
    createRequest: "EXEC pa_crear_solicitud @fechaHora, @idUsuario, @palabraClave, @asuntoDetallado, @cantidadCambios, @idClasificador ,@idRespuesta ,@detalleRespuesta ,@fechaHoraRespuesta ,@idUsuarioRespuesta ,@cantidadArchivos",
    updateRequestID: "EXEC pa_actualizar_solicitud_id @idSolicitud ,@fechaHora,  @idUsuario, @palabraClave ,@asuntoDetallado ,@cantidadCambios ,@idClasificador ,@idRespuesta ,@detalleRespuesta ,@fechaHoraRespuesta ,@idUsuarioRespuesta ,@cantidadArchivos ",
    deleteRequest: "EXEC pa_eliminar_solicitud_id @idSolicitud",
    getAllClasificator: "EXEC pa_listar_calsificadores",

}