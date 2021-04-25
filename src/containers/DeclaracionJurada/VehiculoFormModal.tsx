import { Dialog, Paper, Typography, Grid, TextField, Box, Button } from '@material-ui/core'
import React from 'react'
import { FormModalProps } from '../../types'

const VehiculoFormModal = ({openModal, handleCloseModal}: FormModalProps) => {
    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <Paper elevation={6} sx={{p: 2}}>
            
            <Typography variant="h5" component="h5">
                Formulario Vehiculo
            </Typography>          
            <form>
                <Grid container sx={{mt:2}} spacing={2}>                
                
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Marca" name="marca" size="small" autoFocus  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Chapa" name="chapa" size="small"  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Modelo" name="modelo" size="small"  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Municipio" name="municipio" size="small"  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Cuota" name="cuota" size="small"  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Valor Actual" name="valorActual" size="small"  />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Saldo" name="saldo" size="small"  />
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

export default VehiculoFormModal
