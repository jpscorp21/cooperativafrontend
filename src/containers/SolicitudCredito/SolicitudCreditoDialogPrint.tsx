import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import PrintIcon from '@material-ui/icons/Print';
import { useMemo } from "react";
import { ISolicitudCredito } from "../../models/solicitud-credito-model";

type SolicitudCreditoDialogPrintProps = {
    open: boolean;
    onHide(): void;
    onPrint(url: string): void;
    solicitud: ISolicitudCredito;
}

const SolicitudCreditoDialogPrint = ({open, onHide, onPrint, solicitud}: SolicitudCreditoDialogPrintProps) => {

    const data = useMemo(() => [
        {label: 'Solicitud de crédito', url: 'solicitudcredito/solicitud/', active: true},
        {label: 'Certificado de aprobación de crédito', url: 'solicitudcredito/certificado/', active: solicitud && solicitud.estadoSolicitud === 'APR'},
        {label: 'Liquidación de operación', url: 'solicitudcredito/pagare/', active: solicitud && solicitud.estadoSolicitud === 'APR'},
        {label: 'Pagaré a la orden', url: 'solicitudcredito/pagareorden/', active: solicitud && solicitud.estadoSolicitud === 'APR'},
    ], [solicitud])

    return (
        <Dialog open={open} onClose={onHide}>
            <DialogTitle id="simple-dialog-title">Informes</DialogTitle>
            <List>
                {
                    data.map((item) => (
                        <ListItem key={item.label} autoFocus button onClick={() => onPrint(item.url)} disabled={!item.active}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PrintIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))
                }
            </List>
        </Dialog>
    )
}

export default SolicitudCreditoDialogPrint
