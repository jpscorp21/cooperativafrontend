import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import PrintIcon from '@material-ui/icons/Print';
import { useMemo } from "react";

type SolicitudCreditoDialogPrintProps = {
    open: boolean;
    onHide(): void;
    onPrint(url: string): void;
}

const SolicitudCreditoDialogPrint = ({open, onHide, onPrint}: SolicitudCreditoDialogPrintProps) => {

    const data = useMemo(() => [
        {label: 'Solicitud de crédito', url: 'solicitudcredito/solicitud/'},
        {label: 'Certificado de aprobación de crédito', url: 'solicitudcredito/certificado/'},
        {label: 'Liquidación de operación', url: 'solicitudcredito/pagare/'},
        {label: 'Pagaré a la orden', url: 'solicitudcredito/pagareorden/'},
    ], [])

    return (
        <Dialog open={open} onClose={onHide}>
            <DialogTitle id="simple-dialog-title">Informes</DialogTitle>
            <List>
                {
                    data.map((item) => (
                        <ListItem key={item.label} autoFocus button onClick={() => onPrint(item.url)}>
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
