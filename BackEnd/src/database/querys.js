
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
    getUserFoto: "EXEC listar_usuarios_3 @idUsuario",
    updateUser: "EXEC actualizar_usuarios @cedula ,@nombre ,@apellido1 ,@apellido2 ,@correo ,@fechaNacimiento,@idSexo ,@celular ,@idDepartamento ,@idDistrito, @foto",
    deleteUser: "eliminar_usuarios @cedula",
    getSex: "EXEC listar_sexos",

    //REQUEST
    getALLRequest: "EXEC pa_listra_solicitudes",
    getRequestID: "pa_buscar_solicitud_id @idSolicitud",
    createRequest: "EXEC pa_crear_solicitud  @idUsuario, @palabraClave, @asuntoDetallado, @idClasificador ,@idRespuesta ,@detalleRespuesta ,@idUsuarioRespuesta ,@cantidadArchivos",
    updateRequestID: "EXEC pa_actualizar_solicitud_id @idSolicitud , @idUsuario, @palabraClave ,@asuntoDetallado ,@idClasificador ,@idRespuesta ,@detalleRespuesta ,@idUsuarioRespuesta ,@cantidadArchivos ",
    deleteRequest: "EXEC pa_eliminar_solicitud_id @idSolicitud",
    getAllClasificator: "EXEC pa_listar_calsificadores",
    getRequestIDUser: "EXEC pa_listra_solicitudes_idUsuario @idUsuario, @Pag, @tamPag",
    getRequestIDUserBuscar: "EXEC pa_buscar  @idUsuario, @buscar",

    //FILE
    deleteFilebyID: "EXEC pa_eliminar_archivo_solicitud @idArchivo",
    getFileIDSolicitud: "pa_listar_archivos_idSolicitud @idSolicitud",
    createFile: "EXEC pa_insertar_archivo_solicitud @idSolicitud, @linea, @archivo, @comentario"

}