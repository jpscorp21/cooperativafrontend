/**
 * 
 * Constants
 * 
 */

import { blue, red } from "@material-ui/core/colors";
import theme from "../config/theme";

export const SolicitudEstados: any = {
    PEN: {
        label: 'Pendiente',
        background: blue[400]
    },
    APR: {
        label: 'Aprobado',
        background: theme.palette.primary.main
    },    
    REC: {
        label: 'Rechazado',
        background: red[700]
    },    
}