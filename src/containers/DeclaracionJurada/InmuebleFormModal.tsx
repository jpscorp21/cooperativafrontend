import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React from 'react'
import { FormModalProps } from '../../types'

const InmuebleFormModal = ({openModal, handleCloseModal}: FormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5" sx={{pb: 2}}>
                Formulario Vehiculo
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>                            
                    <Grid item xs={12}>
                        <TextField fullWidth label="Ubicación" name="ubicacion" size="small" autoFocus />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Distrito" name="distrito" size="small" />
                    </Grid>
                    {/* Ambos checkbox */}
                    <Grid item xs={6}>
                        <TextField fullWidth label="Escritura" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Hipotecado" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Lugar Hipoteca" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Numero Finca" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Pago" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Cuota" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Valor Tasación" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Vencimiento" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Cta Cte Catastral" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Valor" name="escritura" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Saldo" name="escritura" size="small" />
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

export default InmuebleFormModal
