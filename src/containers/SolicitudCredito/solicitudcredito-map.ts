import { sociosInitialForm } from "../Socios/socios-data";

export const solicitudCreditoInitialForm = () => ({
    socioId: '',
    socio: sociosInitialForm(),
    modalidadPagoId: '',
    tipoSolicitudId: '',
    tipoGarantiaId: '',
    funcionarioId: '',
    tipoCreditoId: '',
    cajaAhorroVistaId: '',
    importe: '',
    codeudores: [],
    plazo: '',
    fechaPrimerPago: new Date().toISOString(),
    observacion: ''
});