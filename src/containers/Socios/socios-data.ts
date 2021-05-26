import { ISocio } from "../../models/socio-model";

export const sociosInitialForm = () => ({
    nombre: '',
    apellido: '',
    cedula: '',
    estadoCivilId: null,
    fechaNacimiento: new Date().toISOString(),
    lugar: '',
    sexo: 'M',
    nacionalidadId: null,
    nombre_completo: '',
    gradoAcademico: '',
    motivo: '',
    correspondencia: 'particular',
    // direccionParticular: {
    //     calleYNumero: '',
    //     ciudadId: '',
    //     barrioId: '',
    //     telefono: '',
    //     celular: '',
    //     correo: '',
    // },
    // direccionParticular: null,
    // conyugue: null,   
    hijos: [],
    // domicilioLaboral: {
    //     calleYNumero: '',
    //     ciudadId: '',
    //     barrioId: '',
    //     telefono: '',
    //     celular: '',
    //     correo: '',
    // },
    // domicilioLaboral: null,
    antiguedad: 0,
    nombreEmpresa: '',
    esEmpleado: "false",
    profesionId: null,
    puestoLaboralId: null,
    actividadEmpresa: '',
    ingresoMensual: '0',
    otroIngreso: "false",
    otroMonto: '0',
    otroConcepto: '',
    latitud: '',
    longitud: '',
});

export const sociosMap = (socio: ISocio) => ({
    ...socio,
    esEmpleado: socio.esEmpleado ? 'true' : 'false',
    otroIngreso:  socio.otroIngreso ? 'true' : 'false'
})