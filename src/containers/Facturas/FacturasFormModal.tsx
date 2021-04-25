import { Box, Button, Dialog, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'

type FacturasFormModalProps = {
    openModal: boolean;
    handleCloseModal(e: any): void;
}

const FacturasFormModal = ({openModal, handleCloseModal}: FacturasFormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Factura
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Timbrado*" name="timbrado" size="small" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Cod. Establecimiento*" name="codigoEstablecimiento" size="small" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Cod. Expedición*" name="codigoExpedicion" size="small" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nro. Desde*" name="nroDesde" size="small" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nro. Hasta*" name="nroHasta" size="small" />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField fullWidth label="Observación" multiline name="obvervacion" size="small" rows={4}/>
                    </Grid>            
                </Grid>

                <Box sx={{pt: 4, textAlign: 'center'}}>
                <Button variant="contained" fullWidth color="secondary">Guardar cambios</Button>

                </Box>
            </form>

            </Paper>
        </Dialog>
    )
}

export default FacturasFormModal
