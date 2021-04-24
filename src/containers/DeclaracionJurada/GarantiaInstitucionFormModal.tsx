import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React from 'react'
import { FormModalProps } from '../../types'

const GarantiaInstitucionFormModal = ({openModal, handleCloseModal}: FormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5" sx={{pb: 2}}>
                Formulario Garantia Institución
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>                                        
                    <Grid item xs={12}>
                        <TextField fullWidth label="Socio Titular" name="descripcion" size="small" autoFocus />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Cuota" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Importe" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Plazo" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Vencimiento" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Número crédito" name="cuota" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Saldo " name="cuota" size="small" />
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

export default GarantiaInstitucionFormModal
